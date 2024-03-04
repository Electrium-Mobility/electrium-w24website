import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React from "react";
import BikeLogo from '@site/static/img/bike-graphic-2.svg';

import ContactPageHeader from "@site/src/pages/contact";
function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (

            <section className="relative table w-full py-36 lg:py-44">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:col-span-7">
                            <div className="ltr:md:mr-6 rtl:md:ml-6">
                                <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Building <span
                                    className="text-green-600">Sustainable, Affordable</span> Transportation</h4>
                                <p className="text-slate-400 dark:text-slate-200 text-lg max-w-xl">Electrium Mobility is a student design team
                                    based at the University of Waterloo. Our goal is to create sustainable and affordable
                                    transportation in the form of Personal Electric Vehicles.</p>

                                <div className="mt-6">
                                    <a href="join-our-team.html"
                                       className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md ltr:mr-2 rtl:ml-2 mt-2 p-4"> Join
                                        Our Team </a>
                                    <a href="sponsors.html"
                                       className="btn bg-transparent hover:bg-green-600 border-green-600 text-green-600 hover:text-white rounded-md p-4"> Become
                                        A Sponsor</a>
                                </div>
                            </div>
                        </div>


                        <div className="md:col-span-5">
                            <BikeLogo />
                        </div>

                    </div>

                </div>

            </section>


    );
}


export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>

            </main>
        </Layout>
    );
}
