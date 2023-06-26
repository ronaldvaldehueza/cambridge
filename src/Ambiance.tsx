import React from 'react';
import './App.css';


const Ambiance: React.FC = () => {
return (
    <svg viewBox="0 0 1440 640" style={{position: 'absolute', zIndex: -10}}>
    <defs>
        <linearGradient id="wave-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#e7f5ff" />
            <stop offset="100%" stop-color="white" />
        </linearGradient>
    
        <path id='sineWave' fill="url(#wave-gradient)" fill-opacity="0.2" d="M 0 160 C 313.013 161.633 406.212 590.928 736.333 449.333 C 978.882 336.513 1056.905 164.626 1440 160 V 0 H 0" />
    </defs>
    {/* fill="#9ad7ff"  d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0" /> */}

    <use className="wave-01" href="#sineWave" />
    <use className="wave-01" x="-100%" href="#sineWave" />

    <use className="wave-02" href="#sineWave" />
    <use className="wave-02" x="-100%" href="#sineWave" />

    <use className="wave-03" href="#sineWave" />
    <use className="wave-03" x="-100%" href="#sineWave" />
    </svg>
);

}

export default Ambiance;