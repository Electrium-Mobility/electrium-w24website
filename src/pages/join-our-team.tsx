
import Layout from '@theme/Layout';
import {useState} from 'react';
import LinkButton from '../components/UI Components/LinkButton';
import ApplicationProcess from '../components/JoinOurTeam/ApplicationProcess';
import { FaTools, FaPencilAlt, FaPeopleCarry } from 'react-icons/fa';

function JoinOurTeam() {

    return (
        <Layout>
            <section className="relative md:py-24 py-16 ">
                <div className="container mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-6xl leading-normal font-semibold">Join Our Team</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">We are a community of students dedicated to learning and building cool things. Our focus is to create a welcoming, beginner-friendly environment for any students interested in personal electric vehicles. </p>
                        <div className="my-6">
                            <LinkButton to="https://docs.google.com/forms/d/15Gi2L9ly5RnQlfEvdlhNgNd5azuqaPCltsDT_-ipoJw/">APPLY NOW</LinkButton>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Why Join</h3>
            </div>

            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-[30px]">
                    <div className="group relative lg:px-10 transition duration-300 border-4 rounded-xl overflow-hidden text-center">
                        <div className="p-4">
                            <FaTools size={48}/>
                        </div>
                        <div className="mt-6">
                            <p className="text-xl font-medium transition-all duration-500 ease-in-out text-green-600 uppercase">Build</p>
                            <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">Get hands-on experience working on electric components, developing code for the firmware, building the mechanical structure of our vehicles, and so much more.</p>
                        </div>
                    </div>
                    <div className="group relative lg:px-10 transition duration-300 border-4 rounded-xl overflow-hidden text-center">
                        <div className="p-4">
                            <FaPencilAlt size={48}/>
                        </div>
                        <div className="mt-6">
                            <p className="text-xl font-medium transition-all duration-500 ease-in-out text-green-600 uppercase">Learn</p>
                            <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">Our team is  beginner-friendly and fundamentally student-centred. Get easy access to learning materials, receive mentorship and guidance, all while building something meaningful.</p>
                        </div>
                    </div>
                    <div className="group relative lg:px-10 transition duration-300 border-4 rounded-xl overflow-hidden text-center">
                        <div className="p-4">
                            <FaPeopleCarry size={48}/>
                        </div>
                        <div className="mt-6">
                            <p className="text-xl font-medium transition-all duration-500 ease-in-out text-green-600 uppercase">Community</p>
                            <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">We welcome all levels of skill and experience. We are a community of students who are passionate about sharing our knowledge to create great things.</p>
                        </div>
                    </div>

                </div>
            </div>

            <ApplicationProcess />
        </section>
        </Layout>
    )
}

export default JoinOurTeam;
