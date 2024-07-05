import React, { useState, useEffect } from 'react';
import Link from "@docusaurus/Link";
import clsx from "clsx";
import Layout from '@theme/Layout';
import styles from "@site/src/pages/index.module.css";
import Heading from "@theme/Heading";
import SquaredButton from '../components/UI Components/SquaredButton';
import { Formik, FieldArray, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import roleSpecificJson from '../components/constants/role-specific-questions.json';

const SELECT_PROGRAMS = [
    "Accounting and Financial Management",
    "Actuarial Science",
    "Anthropology",
    "Applied Mathematics",
    "Architectural Engineering",
    "Architecture",
    "Bachelor of Arts",
    "Bachelor of Science",
    "Biochemistry",
    "Biological and Medical Physics",
    "Biology",
    "Biomedical Engineering",
    "Biomedical Sciences",
    "Biostatistics",
    "Biotechnology/Chartered Professional Accountancy",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Classical Studies",
    "Climate and Environmental Change",
    "Combinatorics and Optimization",
    "Communication Studies",
    "Computational Mathematics",
    "Computer Engineering",
    "Computer Science",
    "Computer Science/Business Administration",
    "Computing and Financial Management",
    "Data Science",
    "Earth Sciences",
    "Economics",
    "Education",
    "Electrical Engineering",
    "English",
    "Environment and Business",
    "Environment, Resources and Sustainability",
    "Environmental Engineering",
    "Environmental Sciences",
    "Fine Arts",
    "French",
    "Gender and Social Justice",
    "Geography and Aviation",
    "Geography and Environmental Management",
    "Geological Engineering",
    "Geomatics",
    "German",
    "Global Business and Digital Arts",
    "Health Sciences",
    "History",
    "Honours Arts",
    "Honours Arts and Business",
    "Honours Science",
    "Information Technology Management",
    "Kinesiology",
    "Knowledge Integration",
    "Legal Studies",
    "Liberal Studies",
    "Life Sciences",
    "Management Engineering",
    "Materials and Nanosciences",
    "Mathematical Economics",
    "Mathematical Finance",
    "Mathematical Optimization",
    "Mathematical Physics",
    "Mathematics",
    "Mathematics/Business Administration",
    "Mathematics/Chartered Professional Accountancy",
    "Mathematics/Financial Analysis and Risk Management",
    "Mathematics/Teaching",
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Medicinal Chemistry",
    "Medieval Studies",
    "Music",
    "Nanotechnology Engineering",
    "Nursing",
    "Optometry",
    "Peace and Conflict Studies",
    "Pharmacy",
    "Philosophy",
    "Physics",
    "Planning",
    "Political Science",
    "Psychology",
    "Public Health",
    "Pure Mathematics",
    "Recreation and Leisure Studies",
    "Religious Studies",
    "Science and Business",
    "Science and Aviation",
    "Sexuality, Marriage, and Family Studies",
    "Social Development Studies",
    "Social Work",
    "Software Engineering",
    "Sociology",
    "Spanish",
    "Speech Communication",
    "Statistics",
    "Sustainability and Financial Management",
    "Theatre and Performance",
    "Theological Studies",
    "Therapeutic Recreation",
    "Urban Planning"
];

const SELECT_HEARD_SOURCE = [
    "From a friend/word of mouth",
    "Social Media (LinkedIn, Instagram, etc.)",
    "Event (i.e. Fall Open House)",
    "Posters Around Campus",
    "Online (UW Imprint, UW Website, etc.)",
    "Discord",
    "Other",
];

const SELECT_ROLES = [
    "Mechanical",
    "Firmware",
    "Electrical",
    "Web Development",
    "Management",
    "Marketing",
    "Finance",
];

const SELECT_PROJECTS = [
    "Electric Skateboard (4-month)",
    "Electric Skateboard #2 (4-month)",
    "OneWheel (4-month)",
    "Carbon Fibre Skateboard (8-month)",
    "Repair Team",
    "Other"
];

const SELECT_TERMS = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B"];

interface Question {
    name: string;
    question: string;
    type?: string;
    options?: string[];
}

interface RoleSpecificQuestion {
    id: string;
    role: string;
    questions: Question[];
}

const roleSpecificQuestions: RoleSpecificQuestion[] = roleSpecificJson.map(item => ({
    id: item.id,
    role: item.role,
    questions: item.questions.map(q => ({
        name: q.name,
        question: q.question,
        type: q.type,
        options: q.options
    }))
}));

const initialValues = {
    firstName: "",
    lastName: "",
    program: "",
    term: "",
    uwaterlooEmail: "",
    personalEmail: "",
    discordUsername: "",
    isReturningMember: "",
    inPerson: "",
    interests: "",
    heardSource: "",
    role: "",
    roleQuestions: {
        questions: []
    },
    electriumProjects: [],
    friendReferral: "",
    comments: ""
};

const ApplicationForm = () => {
    const [roleQuestions, setRoleQuestions] = useState<RoleSpecificQuestion[]>([]);
    const [selectedRole, setSelectedRole] = useState(""); // State to track the selected role

    useEffect(() => {
    const roleData = roleSpecificQuestions.find(role => role.role === selectedRole);
    if (roleData) {
        setRoleQuestions([roleData]);
    } else {
        setRoleQuestions([]); // Clear if no role is selected
    }
}, [selectedRole]);


    const required = {
        firstName: true,
        lastName: true,
        program: true,
        term: true,
        uwaterlooEmail: true,
        personalEmail: false,
        discordUsername: true,
        isReturningMember: true,
        inPerson: true,
        interests: false,
        heardSource: true,
        roleQuestions: true,
        electriumProjects: true,
        friendReferral: false,
        comments: false
    }

    const handleSubmit = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    };
    
    // const handleSubmit = (values) => {
    //     values.preventDefault();
    //     for (const [key, value] of Object.entries(values)) {
    //         console.log(`${key}: ${value}`);
    //     }
    // };

    // Validation Schema using Yup
    // const validationSchema = Yup.object().shape({
    //     firstName: Yup.string().required('First Name is required'),
    //     lastName: Yup.string().required('Last Name is required'),
    //     program: Yup.string().required('Program is required'),
    //     term: Yup.string().required('Term is required'),
    //     uwaterlooEmail: Yup.string().email('Invalid email').required('UWaterloo Email is required'),
    //     personalEmail: Yup.string().email('Invalid email').required('Personal Email is required'),
    //     discordUsername: Yup.string().required('Discord Username is required'),
    //     isReturningMember: Yup.string().required('Please select an option'),
    //     inPerson: Yup.string().required('Please select an option'),
    //     interests: Yup.string().optional(),
    //     heardSource: Yup.string().required('Please select an option'),
    //     roleQuestions: Yup.array().of(Yup.string()).required('Please answer the role-specific questions'),
    //     friendReferral: Yup.string().optional(),
    //     electriumProjects: Yup.array().of(Yup.string()).required('Please select at least one project'),
    //     comments: Yup.string().optional(),
    // });

    // Reusable Form Field Component
    const TextField = ({ name, label, caption = <></>, type = "text", placeholder = ""}) => (
        <div className="grid grid-cols-1 mb-5">
            <label htmlFor={name} className="font-semibold">
                {label} {required[name] && <span className="text-red-600">*</span>}
            </label>
            <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
            <Field
                id={name}
                name={name}
                type={type}
                className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700"
                placeholder={placeholder}
            />
        </div>
    );

    const RadioField = ({ name, label, caption = <></>, options = [], value=""}) => (
        <div className="grid grid-cols-1 mb-5">
            <label htmlFor={name} className="font-semibold">
                {label} {required[name] && <span className="text-red-600">*</span>}
            </label>
            <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
            <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                {options.map(option => (
                    <label key={option} className="flex items-center">
                        <Field type="radio" id={name} name={name} value={option} className="form-radio text-green-600 border-green-600 rounded-md" />
                        <span className="ml-2">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );

    const DropdownField = ({ name, label, caption = <></>, options = []}) => (
        <div className="grid grid-cols-1 mb-5">
            <label htmlFor={name} className="font-semibold">
                {label} {required[name] && <span className="text-red-600">*</span>}
            </label>
            <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
            <Field as="select" id={name} name={name} className="form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700">
                <option value="">{"-Select option-"}</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Field>
        </div>
    );

    const CheckboxField = ({ name, label, caption = <></>, options = []}) => (
        <div className="grid grid-cols-1 mb-5">
            <label htmlFor={name} className="font-semibold">
                {label} {required[name] && <span className="text-red-600">*</span>}
            </label>
            <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
            <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                {options.map(option => (
                    <label key={option} className="block">
                        <Field
                            type="checkbox"
                            id={name}
                            name={name}
                            value={option}
                            className="form-checkbox text-charcoal-600 border border-charcoal-300 rounded-md focus:outline-none focus:ring-green-700 focus:border-green-700"
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );

    const RoleSpecificField = ({name, label, caption = <></>, options = []}) => (
        <div className="grid grid-cols-1 mb-5">
            <div className="grid grid-cols-1 mb-5">
                <label htmlFor={name} className="font-semibold">
                    {label} {required[name] && <span className="text-red-600">*</span>}
                </label>
                <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
                <Field as="select" id={name} name={name} onChange={(e) => {setSelectedRole(e.target.value) }} value={selectedRole} className="form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700">
                    <option value="">{"-Select option-"}</option>
                    {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </Field>

            </div>
            {roleQuestions.length > 0 && roleQuestions[0].questions.map((question, index) => {
                console.log("Rendering Question:", question); // Debug log
                return (
                    <div key={index} className="grid grid-cols-1 mb-5">
                        {question.type === 'text' && <TextField name={question.name} label={question.question}></TextField>}
                        {question.type === 'radio' && <RadioField name={question.name} label={question.question} options={question.options}></RadioField>}
                        {question.type === 'dropdown' && <DropdownField name={question.name} label={question.question} options={question.options}></DropdownField>}
                        {question.type === 'checkbox' && <CheckboxField name={question.name} label={question.question} options={question.options}></CheckboxField>}
                    </div>
                );
            })}


        </div>
    );

    return (
        <Layout>
            <section className="relative py-16 dark:bg-slate-800">
                <div className="container">
                    <div className="md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-6 md:mt-0">
                            <div className="ltr:lg:ml-5 rtl:lg:mr-5">
                                <h3 className="pt-12 text-center md:leading-normal text-4xl leading-normal font-semibold">Apply</h3>
                                <p className="text-center mb-4 md:leading-normal leading-normal">
                                    Hi there! Thank you for your interest in joining Electrium Mobility!
                                    <br />
                                    Applications are rolling <span className="font-semibold text-green-600">year-round</span>, so if you are joining mid-term then you will be placed in one of the teams in the current term.
                                </p>
                                <p className="mb-4 md:leading-normal leading-normal text-red-600">
                                    * Indicates required question
                                </p>
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch!</h3>
                                    <Formik
                                        initialValues={initialValues}
                                        // validationSchema={validationSchema} 
                                        onSubmit={(values, actions) => {
                                            setTimeout(() => {
                                              alert(JSON.stringify(values, null, 2));
                                              actions.setSubmitting(false);
                                            }, 1000);
                                          }}
                                    >
                                        {(values) => (
                                            <Form>
                                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                                    <div className="lg:col-span-6">
                                                        <TextField name="firstName" label="First Name"/>
                                                    </div>
                                                    <div className="lg:col-span-6">
                                                        <TextField name="lastName" label="Last Name"/>
                                                    </div>
                                                </div>
                                                <DropdownField name="program" label="What program are you in?" options={SELECT_PROGRAMS} />
                                                <DropdownField name="term" label="What term will you be in in the Spring 2024 term?" options={SELECT_TERMS} />
                                                <TextField name="uwaterlooEmail" label="What is your @uwaterloo email? (example s36chiu@uwaterloo.ca)" type="email"/>
                                                <TextField name="personalEmail" label="What is your personal email? (example, sherwin.chiu89@gmail.com)" type="email"/>
                                                <TextField name="discordUsername" label="What is your Discord username? (example .sherwin)"/>
                                                <RadioField name="isReturningMember" label="Are you a returning member?" options={["Yes", "No"]} />
                                                <RadioField name="inPerson" label="Will you be in-person at Waterloo in Spring 2024?" options={["Yes", "No"]} />
                                                <TextField name="interests"
                                                    label="What are your interests and hobbies? Tell us something interesting about yourself!"
                                                    caption={<>This is for us to get to know you, and does not have an impact on your application :)</>}
                                                />
                                                <RadioField name="heardSource" label="How did you hear about Electrium Mobility?" options={SELECT_HEARD_SOURCE} />
                                                <RoleSpecificField name="role" label="What role are you interested in?" caption={<>You can learn more about what the various roles do <Link to="/role-responsibilities" className="text-green-600 font-bold">here</Link>.</>} options={SELECT_ROLES}/>
                                                <TextField name="friendReferral" label="If you're applying with a friend, please put their full name below." type="text"/>
                                                <CheckboxField
                                                    name="electriumProjects"
                                                    label="Please selection which project(s) you're interested in. We will complete them during the Spring 2024 term."
                                                    caption={<>Feel free to add your own project idea under "Other".</>}
                                                    options={SELECT_PROJECTS}
                                                ></CheckboxField>
                                                <TextField name="comments" label="Any additional comments or questions?"/>
                                                <button type="submit" className="btn p-2 w-48 inline-block align-middle bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md w-full">Submit</button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ApplicationForm;
