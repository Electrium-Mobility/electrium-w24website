import React, { useState } from 'react';
import { FaEnvelope, FaDiscord, FaInstagram } from 'react-icons/fa';
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "@site/src/pages/index.module.css";
import Heading from "@theme/Heading";
import SquaredButton from '../components/UI Components/SquaredButton';

function ContactPageHeader() {

    // Flex container style
    const flexContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around', // Distribute space evenly around items
        flexWrap: 'wrap', // Allow wrapping for smaller screens
        maxWidth: '100%', // Limit max width to the parent container
    };

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Contact Us
                </Heading>
                <p className="hero__subtitle">Have any questions? <br/>
                    Interested in learning more about Electrium? <br/>
                    Let's chat!</p>
                    <div style={flexContainerStyle}>
                        <SquaredButton to="mailto:your-email@example.com" icon={FaEnvelope} />
                        <SquaredButton to="https://www.discord.com" icon={FaDiscord} />
                        <SquaredButton to="https://www.instagram.com/yourusername" icon={FaInstagram} />
                    </div>
            </div>
        </header>
    );
}
export default ContactPageHeader;
