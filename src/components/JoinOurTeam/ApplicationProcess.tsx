import {useState} from 'react';

function ApplicationProcess() {
    const steps = ['asdf'];
    const [completedSteps, setCompletedSteps] = useState([]);

    const toggleStep = (stepIndex) => {
      if (completedSteps.includes(stepIndex)) {
        setCompletedSteps(completedSteps.filter(step => step !== stepIndex));
      } else {
        setCompletedSteps([...completedSteps, stepIndex]);
      }
    };

    return(
        <div className='relative md:py-24 py-16'>
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:leading-normal text-3xl leading-normal font-semibold">How To Join</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Ready to get building and take on new challenges? <br /> Apply today!</p>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 px-4 mt-8 gap-[30px]">
                    <div className="lg:col-span-6 md:col-span-5">                            
                    <ul className="list-none flex-row p-6 shadow dark:shadow-gray-800 rounded-md" id="myTab" role="tablist">
                                <li>
                                    <div className="px-6 py-4 ltr:text-left rtl:text-right rounded-md w-full transition-all duration-500 ease-in-out hover:bg-gray-100 hover:dark:bg-green-900 cursor-pointer">
                                        <span className="block text-green-600 ">Step 1</span>
                                        <span className="text-xl mt-2 block font-bold">Discover Electrium</span>
                                        <span className="block mt-2">Learn more about our current projects and connect with us through social media!</span>
                                    </div>
                                </li>
                                <li role="presentation">
                                    <div className="px-6 py-4 ltr:text-left rtl:text-right rounded-md w-full transition-all duration-500 ease-in-out hover:bg-gray-100 hover:dark:bg-green-900 cursor-pointer">
                                        <span className="block text-green-600">Step 2</span>
                                        <span className="text-xl mt-2 block font-bold">Submit Your Application</span>
                                        <span className="block mt-2">Tell us about yourself and why you're interested in joining Electrium! Applications open soon.</span>
                                    </div>
                                </li>
                                <li role="presentation">
                                    <div className="px-6 py-4 ltr:text-left rtl:text-right rounded-md w-full transition-all duration-500 ease-in-out hover:bg-gray-100 hover:dark:bg-green-900 cursor-pointer">
                                        <span className="block text-green-600">Step 3</span>
                                        <span className="block text-xl mt-2 font-bold">Interview With Us</span>
                                        <span className="block mt-2">Chat with us so that we can get to know each other better! Meet our team and ask us questions!</span>
                                    </div>
                                </li>
                            </ul>
                    </div>
                    <div className="lg:col-span-6 md:col-span-7">
                        <div id="myTabContent" className="px-8 py-16 shadow dark:shadow-gray-800 rounded-md">
                            <div className="" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <img src={require("/static/img/kickoff/kickoff.jpg").default} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ApplicationProcess;