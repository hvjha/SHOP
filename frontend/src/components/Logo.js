import React from 'react';

const Logo = ({ w, h }) => {
  return (
    <div >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width={w} height={h}>

  <circle cx="250" cy="250" r="220" stroke="#333" strokeWidth="5" fill="none" />

  
  <line x1="100" y1="190" x2="400" y2="190" stroke="#333" strokeWidth="3" />
  <line x1="100" y1="310" x2="400" y2="310" stroke="#333" strokeWidth="3" />

  
  <text x="50%" y="265" textAnchor="middle" fontFamily="Arial" fontSize="60" fill="#333" fontWeight="bold">HARSH</text>

  
  <text x="50%" y="360" textAnchor="middle" fontFamily="Arial" fontSize="40" fill="#333" fontWeight="bold">SHOP</text>


  <text x="50%" y="400" textAnchor="middle" fontFamily="Arial" fontSize="20" fill="#333">TAGLINE & HERE</text>


  <polygon points="250,180 260,200 250,220 240,200" fill="none" stroke="#333" strokeWidth="3" />


  <line x1="180" y1="200" x2="230" y2="200" stroke="#333" strokeWidth="2" />
  <line x1="270" y1="200" x2="320" y2="200" stroke="#333" strokeWidth="2" />
</svg>


    </div>
  );
};

export default Logo;


