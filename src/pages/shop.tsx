import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Shop() {
    const {siteConfig} = useDocusaurusContext();
    const storeUrl = siteConfig.customFields.storeUrl || 'https://store.electriummobility.com';

    useEffect(() => {
        window.location.href = storeUrl;
    }, []);

    return (
        <Redirect to={storeUrl} />
    );
}