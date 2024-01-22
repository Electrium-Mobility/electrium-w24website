import React, { useState } from 'react';
import Link from "@docusaurus/Link";

const SquaredButton = ({ to, icon }) => {
    const [hover, setHover] = useState(false);

    const iconStyle = { color: hover ? '#e8f5e9' : 'green', fontSize: '2em' };
    const buttonStyle = {
        backgroundColor: hover ? 'green' : '#e8f5e9',
        borderRadius: '20%',
        padding: '40px',
        margin: '10px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <Link to={to} style={buttonStyle} onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
            {React.createElement(icon, { style: iconStyle })}
        </Link>
    );
};

export default SquaredButton;
