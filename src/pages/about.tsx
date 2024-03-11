
import Layout from '@theme/Layout';
import {useState} from 'react';
import FAQ from '../components/About/FAQ';

import { FaMoneyBill, FaTree, FaWind, FaBook } from 'react-icons/fa';
import DocusaurusLogoWithKeytar from '@site/static/img/bike-graphic.svg';

function About() {
    return (
        <Layout title="About">
            <section className="relative md:py-24 py-16 overflow-hidden">
                <div className="container md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-[30px]">
                        <div>
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-green-600/5 bottom-0 ltr:left-0 rtl:right-0 rotate-45 -z-1 rounded-3xl"></div>
                            <DocusaurusLogoWithKeytar title="Docusaurus Logo" className="mx-auto max-w-[440px] h-auto w-84 h-48" />
                        </div>

                        <div className="ltr:lg:ml-8 rtl:lg:mr-8 text-center md:text-left">
                            <h4 className="mb-6 md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600">About Us</h4>
                            <p className="text-slate-400">Electrium Mobility is a student-led design team at the University of Waterloo focused on shaping the future of transportation through electric vehicles. With a strong emphasis on sustainability and innovation, we create affordable electric vehicles and promote their adoption. Our mission is to inspire students, build awareness, and advocate for the economic and environmental benefits of electric mobility. Join us as we revolutionize the automotive industry and contribute to a greener future.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Values</h3>
        
                        </div>
        
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-4 gap-[30px]">
                            <div className="text-center md:px-6">
                                <div className="w-28 h-28 bg-indigo-600/5 text-indigo-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <FaTree />
                                </div>
        
                                <div className="content mt-7">
                                    <a href="page-services.html" className="title h5 text-lg font-medium hover:text-green-600">Sustainability</a>
                                    <p className="text-slate-400 mt-3">We aim to raise awareness and create sustainable vehicle technologies, empowering students to make greener transportation choices.</p>
                                </div>
                            </div>
                            
                            <div className="text-center md:px-6">
                                <div className="w-28 h-28 bg-red-600/5 text-red-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <FaMoneyBill/>
                                </div>
        
                                <div className="content mt-7">
                                    <a href="" className="title h5 text-lg font-medium hover:text-red-600">Affordability</a>
                                    <p className="text-slate-400 mt-3">We are dedicated to raising awareness about the economic benefits of electric vehicles, advocating for sustainable transportation for students.</p>
                                </div>
                            </div>
                            
                            <div className="text-center md:px-6">
                                <div className="w-28 h-28 bg-emerald-600/5 text-emerald-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <FaWind />
                                </div>
        
                                <div className="content mt-7">
                                    <a href="" className="title h5 text-lg font-medium hover:text-emerald-600">Portability</a>
                                    <p className="text-slate-400 mt-3">We aim to create convenient and compact electric vehicles that empower students to commute efficiently and sustainably.</p>
                                </div>
                            </div>
                            
                            <div className="text-center md:px-6">
                                <div className="w-28 h-28 bg-amber-600/5 text-amber-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <FaBook />
                                </div>
        
                                <div className="content mt-7">
                                    <a href="" className="title h5 text-lg font-medium hover:text-amber-600">Student Learning</a>
                                    <p className="text-slate-400 mt-3">We are dedicated to empowering students with the knowledge and skills to design and build electric vehicles. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>
                <FAQ />
            </div>
    </Layout>
    );
}

export default About;