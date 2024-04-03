import { useState } from "react";
import { FaUser, FaEnvelope, FaBook, FaMessage} from "react-icons/fa6";
import Message from "../../../static/img/message.svg";
import emailjs from "@emailjs/browser";


type formFields = {
    name: string;
    email: string;
    question: string;
    comment: string;
};

const ContactPageForm = () => {
    const [formValues, setFormValues] = useState<formFields>({
        name: "",
        email: "",
        question: "",
        comment: "",
    });
    const [formSent, setFormSent] = useState<boolean>(false);

    const updateFormValues = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormValues((values) => ({ ...values, [fieldName]: fieldValue }));
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // stop page refresh on submit
        
        //idrk what to do with the form inputs, probably send to an API somewhere
        emailjs.sendForm('service_g5pvqxb', 'template_tznfo8k', e.target as HTMLFormElement, 'yrcBV_oYPU2TTOtbs');
        setFormValues({name: "", email:"", question:"", comment:""});
        setFormSent(true);
    };          

    return (<>
        <div className="flex bg-slate-100 relative justify-around mt-20 md:px-8 p-0 md:py-16">
            <div className="hidden md:block ml-8">
                <Message/>
            </div>
            <div className="relative bg-white rounded-md md:shadow-md md:shadow-slate-200 shadow-none p-8 md:ml-8 m-0 md:w-3/5 w-full pb-20">
                <h2 className="m-2">Get In Touch!</h2>
                <form 
                    onSubmit={submit} 
                    className="relative"
                >
                    <div className="text-lg grid grid-cols-2">
                        <div className="mx-2 mt-6">
                            <h4 className="font-medium my-2">Your Name:</h4>
                            <div style={{border: "1px solid rgb(148, 163, 184)"}} className="flex flex-row items-start rounded-sm border-2 border-slate-400 pl-3">
                                <div className="pt-2">
                                    <FaUser/>
                                </div>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Name:"
                                    value={formValues.name}
                                    onChange={updateFormValues}
                                    className=" text-sm border-0 focus:outline-none focus:bg-gray-100 p-1 m-1 w-full"
                                />
                            </div>
                        </div>
                        <div className="mx-2 mt-6">
                            <h4 className="font-medium my-2">Your Email:</h4>
                            <div  style={{border: "1px solid rgb(148, 163, 184)"}} className="flex flex-row items-top rounded-sm border-2 border-slate-400 pl-3">
                                <div className="pt-2">
                                    <FaEnvelope/>
                                </div>
                                <input
                                    required
                                    type="text"
                                    name="email"
                                    placeholder="Email:"
                                    value={formValues.email}
                                    onChange={updateFormValues}
                                    className=" text-sm border-0 focus:outline-none focus:bg-gray-100 p-1 m-1 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mx-2 mt-6">
                        <h4 className="font-medium my-2">Your Question:</h4>
                        <div style={{border: "1px solid rgb(148, 163, 184)"}} className="flex flex-row items-start rounded-sm border-2 border-slate-400 pl-3">
                            <div className="pt-2">
                                <FaBook/>
                            </div>
                            <input
                                type="text"
                                name="question"
                                placeholder="Subject:"
                                value={formValues.question}
                                onChange={updateFormValues}
                                className=" text-sm border-0 focus:outline-none focus:bg-gray-100 p-1 m-1 w-full"
                            />
                        </div>
                    </div>
                    <div className="mx-2 mt-6">
                        <h4 className="font-medium my-2">Your Comment:</h4>
                        <div style={{border: "1px solid rgb(148, 163, 184)"}} className="flex flex-row items-start rounded-sm border-2 border-slate-400 pl-3">
                            <div className="pt-2">
                                <FaMessage/>
                            </div>
                            <textarea
                                name="comment"
                                placeholder="Message:"
                                value={formValues.comment}
                                onChange={updateFormValues}
                                className="text-sm border-0 focus:outline-none focus:bg-gray-100 p-1 m-1 w-full font-sans resize-y"
                            />
                        </div>
                    </div>
                    <input 
                        type="submit"
                        value="Send Message"
                        className="btn bg-green-600 hover:bg-green-700 border-none text-lg font-medium font-sans text-white rounded-md m-2 mt-8 py-2 px-4 cursor-pointer"
                    >
                    </input>
                </form>
                { formSent ? 
                <div className="absolute top-0 left-0 w-full h-full rounded-md bg-white bg-opacity-80 flex flex-col justify-center items-center">
                    <h2>Message Sent!</h2>
                    <button 
                        className="btn bg-green-600 hover:bg-green-700 border-none text-lg font-medium font-sans text-white rounded-md m-2 mt-8 py-2 px-4 cursor-pointer"
                        onClick={()=> setFormSent(false)}
                    >
                        Send Another
                    </button>
                </div> : null}
            </div>
        </div>
    </>);
};

export default ContactPageForm;