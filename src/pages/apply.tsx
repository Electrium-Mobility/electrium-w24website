import React, { useState, useEffect } from 'react';
import Link from "@docusaurus/Link";
import { useHistory } from '@docusaurus/router';
import clsx from "clsx";
import Layout from '@theme/Layout';
import styles from "@site/src/pages/index.module.css";
import Heading from "@theme/Heading";
import SquaredButton from '../components/UI Components/SquaredButton';
import { Formik, FieldArray, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CheckboxField from '../components/common/CheckboxField';
import DropdownField from '../components/common/DropdownField';
import RadioField from '../components/common/RadioField';
import TextField from '../components/common/TextField';
import {RoleSpecificSubField} from '../components/common/RoleSpecificField';
import ValidationSchema from '../components/common/validationSchema';
import skateboard from '../../static/img/roles-responsibilty/skateboard.png';
import onewheel from '../../static/img/roles-responsibilty/onewheel.png';
import scooter from '../../static/img/roles-responsibilty/scooter.png';
import skateboard2 from '../../static/img/roles-responsibilty/skateboard2.png';
import onewheel2 from '../../static/img/roles-responsibilty/onewheel2.png';
import {FaDiscord} from "react-icons/fa";

/*
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
    "Systems Design Engineering",
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
    "Lead",
];

const SELECT_PROJECTS = [
    "Electric Bike (8-month)",
    "Electric Scooter",
    "Electric Skateboard",
    "Balance Board",
    "Electric Motorcycle",
    "Electric Go-Kart",
    "Electric Couch",
    "Custom Electronics",
    "Other",
];

const SELECT_TERMS = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B"];

const SELECT_STREAMS = ["Stream 4", "Stream 8", "Others"];

const initialValues = {
    firstName: "",
    lastName: "",
    program: "",
    term: "",
    stream: "",
    uwaterlooEmail: "",
    personalEmail: "",
    discordUsername: "",
    isReturningMember: "",
    inPerson: "",
    interests: "",
    heardSource: "",
    roleQuestions: {
        role: ""
    },
    electriumProjects: [],
    friendReferral: "",
    comments: ""
};


const ApplicationForm = () => {
    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowImages(window.innerWidth >= 1034);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const history = useHistory();

    const REQUIRED = {
        firstName: true,
        lastName: true,
        program: true,
        term: true,
        stream: true,
        uwaterlooEmail: true,
        personalEmail: true,
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

    const handleSubmit = async (values, actions) => {
        try {
            fetch('https://script.google.com/macros/s/AKfycbyT1EwSE6jKrRecTtN2u8kYolnOAJS9_kLs9yDndVguc4vVvbon3l01iBvOjijOezFB/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(values),
            })
            .then(response => response.json())
            .then(data => {
            // console.log('Success:', data);
            })
            .catch(error => {
                // console.error('Error:', error);
            });
            actions.setStatus({ success: true, message: 'Form submitted successfully!' });
        } catch (error) {
            actions.setStatus({ success: false, message: 'Error submitting form' });
            // console.error('Error:', error);
        }
        actions.setSubmitting(false);
        history.push('/thankyou');
    };

    return (
        <Layout>
            <section className="relative py-16 dark:bg-slate-800">
                <div className="container">
                    <div>
                        {showImages && (
                            <div className="images-container">
                                <img src={skateboard} alt="skateboard" style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: 'auto',
                                    left: '0',
                                    transform: 'translateX(-10%)',
                                    top: '50px'
                                }}/>
                                <img src={onewheel} alt="onewheel" style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: 'auto',
                                    right: '0',
                                    transform: 'translateX(10%)',
                                    top: '350px'
                                }}/>
                                <img src={scooter} alt="scooter" style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: 'auto',
                                    left: '0',
                                    transform: 'translateX(-10%)',
                                    top: '650px'
                                }}/>
                                <img src={skateboard2} alt="skateboard-right" style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: 'auto',
                                    right: '0',
                                    transform: 'translateX(10%)',
                                    top: '950px'
                                }}/>
                                <img src={onewheel2} alt="onewheel-left" style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: 'auto',
                                    left: '0',
                                    transform: 'translateX(-10%)',
                                    top: '1250px'
                                }}/>
                                <img src={scooter} alt="scooter" style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: 'auto',
                                    right: '0',
                                    transform: 'translateX(-10%)',
                                    top: '1550px'
                                }}/>
                                <img src={skateboard} alt="skateboard" style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: 'auto',
                                    left: '0',
                                    transform: 'translateX(-10%)',
                                    top: '1850px'
                                }}/>
                                <img src={onewheel} alt="onewheel" style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: 'auto',
                                    right: '0',
                                    transform: 'translateX(10%)',
                                    top: '2150px'
                                }}/>

                            </div>
                        )}
                    </div>
                    <div className="md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-6 md:mt-0">
                            <div className="ltr:lg:ml-5 rtl:lg:mr-5">
                                <h3 className="pt-12 text-center md:leading-normal text-4xl leading-normal font-semibold">Apply</h3>
                                <h3 className="font-semibold text-green-600 text-center"> Fall 2024 Application is Open!</h3>
                                <p className="text-center mb-4 md:leading-normal leading-normal">
                                    Hi there! Thank you for your interest in joining Electrium Mobility!
                                    <br/>
                                    Applications are rolling <span
                                    className="font-semibold text-green-600">year-round</span>, so if you are joining
                                    mid-term then you will be placed in one of the teams in the current term.
                                </p>
                                <p className="mb-4 md:leading-normal leading-normal text-red-600">
                                    * Indicates required question
                                </p>
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch!</h3>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={ValidationSchema}
                                        onSubmit={(values, actions) => {
                                            handleSubmit(values, actions);
                                        }}
                                    >
                                        {(values) => (
                                            <Form>
                                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                                    <div className="lg:col-span-6">
                                                        <TextField name="firstName" label="First Name"
                                                                   required={REQUIRED.firstName}/>
                                                    </div>
                                                    <div className="lg:col-span-6">
                                                        <TextField name="lastName" label="Last Name"
                                                                   required={REQUIRED.lastName}/>
                                                    </div>
                                                </div>
                                                <DropdownField name="program" label="What program are you in?"
                                                               options={SELECT_PROGRAMS} required={REQUIRED.program}/>
                                                <DropdownField name="term"
                                                               label="What term will you be in in the Fall 2024 term?"
                                                               options={SELECT_TERMS} required={REQUIRED.term}/>
                                                <DropdownField name="stream" label="What stream are you in?"
                                                               options={SELECT_STREAMS} required={REQUIRED.stream}/>
                                                <TextField name="uwaterlooEmail"
                                                           label="What is your @uwaterloo email? (example s36chiu@uwaterloo.ca)"
                                                           type="email" required={REQUIRED.uwaterlooEmail}/>
                                                <TextField name="personalEmail"
                                                           label="What is your personal email? (example, sherwin.chiu89@gmail.com)"
                                                           type="email" required={REQUIRED.personalEmail}/>
                                                <TextField name="discordUsername"
                                                           label="What is your Discord username? (example .sherwin)"
                                                           required={REQUIRED.discordUsername}/>
                                                <RadioField name="isReturningMember" label="Are you a returning member?"
                                                            options={["Yes", "No"]}
                                                            required={REQUIRED.isReturningMember}/>
                                                <RadioField name="inPerson"
                                                            label="Will you be in-person at Waterloo in Fall 2024?"
                                                            options={["Yes", "No"]} required={REQUIRED.inPerson}/>
                                                <TextField name="interests"
                                                           label="What are your interests and hobbies? Tell us something interesting about yourself!"
                                                           caption={<>This is for us to get to know you, and does not
                                                               have an impact on your application :)</>}
                                                           required={REQUIRED.interests}
                                                />
                                                <RadioField name="heardSource"
                                                            label="How did you hear about Electrium Mobility?"
                                                            options={SELECT_HEARD_SOURCE}
                                                            required={REQUIRED.heardSource}/>
                                                <Field
                                                    name="roleQuestions"
                                                    render={({field, form}) => (
                                                        <RoleSpecificSubField
                                                            field={field}
                                                            form={form}
                                                            subName="role"
                                                            label="What role are you interested in?"
                                                            caption={(
                                                                <>You can learn more about what the various roles
                                                                    do <Link to="/responsibilities" target="_blank"
                                                                             className="text-green-600 font-bold">here</Link>.</>
                                                            )}
                                                            options={SELECT_ROLES}
                                                            required={REQUIRED.roleQuestions}
                                                        />
                                                    )}
                                                />
                                                <TextField name="friendReferral"
                                                           label="If you're applying with a friend, please put their full name below."
                                                           type="text" required={REQUIRED.friendReferral}/>
                                                <CheckboxField
                                                    name="electriumProjects"
                                                    label="Please select which project(s) you're interested in. We will complete them during the Fall 2024 term."
                                                    caption={<>Feel free to add your own project idea under "Other".</>}
                                                    options={SELECT_PROJECTS}
                                                    required={REQUIRED.electriumProjects}
                                                ></CheckboxField>
                                                <TextField name="comments" label="Any additional comments or questions?"
                                                           required={REQUIRED.comments}/>
                                                <button type="submit"
                                                        className="btn p-2 w-48 inline-block align-middle bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md w-full">Submit
                                                </button>
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
*/

const ApplicationClosed: React.FC = () => {
    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowImages(window.innerWidth >= 1034);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Layout>
            <div>
                <div>
                    {showImages && (
                        <div className="images-container">
                            <img src={skateboard} alt="skateboard" style={{
                                position: 'absolute',
                                width: '150px',
                                height: 'auto',
                                left: '0',
                                transform: 'translateX(-10%)',
                                top: '50px'
                            }}/>
                            <img src={onewheel} alt="onewheel" style={{
                                position: 'absolute',
                                width: '150px',
                                height: 'auto',
                                right: '0',
                                transform: 'translateX(10%)',
                                top: '350px'
                            }}/>
                            <img src={scooter} alt="scooter" style={{
                                position: 'absolute',
                                width: '150px',
                                height: 'auto',
                                left: '0',
                                transform: 'translateX(-10%)',
                                top: '650px'
                            }}/>
                            <img src={skateboard2} alt="skateboard-right" style={{
                                position: 'absolute',
                                width: '150px',
                                height: 'auto',
                                right: '0',
                                transform: 'translateX(10%)',
                                top: '950px'
                            }}/>
                            <img src={onewheel2} alt="onewheel-left" style={{
                                position: 'absolute',
                                width: '150px',
                                height: 'auto',
                                left: '0',
                                transform: 'translateX(-10%)',
                                top: '1250px'
                            }}/>
                        </div>
                    )}
                </div>
                <div
                    className="max-w-xl mx-auto p-12  min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center">
                    <h2 className="md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600 mb-6">
                        Applications are now closed.
                    </h2>
                    <p className="text-slate-400">
                        Applications for the Fall 2024 term are now closed.
                        Our applications will open December for winter 2025 term!
                    </p>

                </div>
            </div>
        </Layout>
    );
};

export default ApplicationClosed;
