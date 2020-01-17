import React from 'react';
import ReactDOM from 'react-dom';

const width = 960;
const height = 500; 
const centerX = width/2;
const centerY = height/2; 
const strokewidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius =  50;
//height/2- strokewidth/2
//centerx -  eyeoffsetX



const App = () => (
<svg width = {width} height ={height}>
     <circle 
             cx={centerX}
             cy={centerY}
             r={centerY -strokewidth/2}
             fill ="yellow"
             stroke ="black"
             stroke-width ={strokewidth}
       />
        
  <circle 
             cx={centerX-eyeOffsetX}
             cy={centerY-eyeOffsetX}
             r={eyeRadius}
             
    />
  
  <circle 
             cx={centerX+eyeOffsetX}
             cy={centerY+eyeOffsetX}
             r={eyeRadius}
             
    />
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);