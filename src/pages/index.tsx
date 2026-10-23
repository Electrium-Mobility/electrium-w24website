import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React from "react";
import Hero from "@site/src/components/Home/Hero"

import ContactPageHeader from "@site/src/pages/contact";
import HomePageIntro from "@site/src/components/UI Components/HomePageIntro";
import GetInvolved from "@site/src/components/UI Components/GetInvolved";
import MetricsBand from '../components/Home/MetricsBand';
import ProjectShowcase from "@site/src/components/Home/ProjectShowcase";


export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            description="Electrium Mobility!!!!"> {/*Description will go into a meta tag in <head /> */}
            <Hero />
            <MetricsBand />
            <ProjectShowcase />
            <main>
                <HomePageIntro />
                <GetInvolved />
            </main>
        </Layout>
    );
}
