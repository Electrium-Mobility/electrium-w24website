import React, { useState } from 'react';
import { FaEnvelope, FaDiscord, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from "@docusaurus/Link";
import clsx from "clsx";
import Layout from '@theme/Layout';
import styles from "@site/src/pages/index.module.css";
import Heading from "@theme/Heading";
import SquaredButton from '../components/UI Components/SquaredButton';
import * as Yup from "yup";

function ContactPageHeader() {

    return (
        <Layout>
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid grid-cols-1 pb-4 text-center">
                        <h3 className="pt-1 mb-4 md:leading-normal text-4xl leading-normal font-semibold">Contact Us</h3>
                    </div>
                    <div>
                        <form className = "grid gap-4 max-w-sm w-full mx-auto font-sans" action = "https://formspree.io/f/xkovgqgd" method = "POST">
                                <input className = "w-full border border-gray-450 rounded-md py-2 px-3 bg-transparent" placeholder = "Name" type = "text" required name = "name"/>
                                <input  className = "w-full border border-gray-450 rounded-md py-2 px-3 bg-transparent"placeholder = "Email" type = "email" required name = "email"/>
                                <input className = "w-full border border-gray-450 rounded-md py-2 px-3 bg-transparent" placeholder = "Subject" type = "text" required name = "subject"/>
                                <textarea className = "border border-gray-450 rounded-md px-3 py-2 h-32 bg-transparent font-sans" placeholder = "Message" required name = "message"/>
                                <input className="cursor-pointer bg-green-600 border-none text-white text-lg font-semibold py-2 px-6 rounded-md mx-auto mb-10 mt-4" type = "submit"/>
                        </form>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[30px]">
                        <div className="text-center px-6 mt-6">
                            <div
                                className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <FaEnvelope />
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Email</h5>

                                <div className="mt-5">
                                    <a href="mailto:electriummobility@gmail.com"
                                       className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">electriummobility@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6 mt-6">
                            <div
                                className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <FaDiscord />
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Discord</h5>

                                <div className="mt-5">
                                    <a href="https://discord.gg/jggFVza4XR" target="_blank"
                                       className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Join
                                        our Discord server</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6 mt-6">
                            <div
                                className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <FaInstagram />
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Instagram</h5>

                                <div className="mt-5">
                                    <a href="https://www.instagram.com/electriummobility/" target="_blank"
                                       className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Message
                                        us on Instagram</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6 mt-6">
                            <div
                                className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <FaGithub />
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">GitHub</h5>

                                <div className="mt-5">
                                    <a href="https://github.com/Electrium-Mobility" target="_blank"
                                       className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">
                                        Check out our GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    );
}
export default ContactPageHeader;
