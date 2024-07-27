import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import skateboard from '../../static/img/roles-responsibilty/skateboard.png';
import onewheel from '../../static/img/roles-responsibilty/onewheel.png';
import scooter from '../../static/img/roles-responsibilty/scooter.png';
import skateboard2 from '../../static/img/roles-responsibilty/skateboard2.png';
import onewheel2 from '../../static/img/roles-responsibilty/onewheel2.png';

const Thankyou: React.FC = () => {
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
                <div className="max-w-xl mx-auto p-8 bg-white mt-16">
                    <h2 className="md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600">
                        Thank you for applying!
                    </h2>
                    <p className="text-slate-400">
                        After reviewing everyone's applications, we will be reaching out via email to confirm your
                        submission :)
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Thankyou;
