import React, { useState } from 'react';
import { FaEnvelope, FaDiscord, FaInstagram } from 'react-icons/fa';
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
                    <div className="grid grid-cols-1 pt-16 pb-8 text-center">
                        <h3 className="pt-12 mb-4 md:leading-normal text-4xl leading-normal font-semibold">Contact Us</h3>

                        <p className="mt-4 text-slate-400 max-w-xl mx-auto"> Have any questions?</p>
                        <p className="mt-1 text-slate-400 max-w-xl mx-auto">Interested in learning
                            more about Electrium?</p>
                        <p className="mt-1 text-slate-400 max-w-xl mx-auto"> Let's chat! </p>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
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
                                        our discord server</a>
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
                                        us on instagram</a>
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
