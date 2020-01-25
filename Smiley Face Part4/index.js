import React from 'react';
import ReactDOM from 'react-dom'
import {arc} from 'd3';

const width = 960;
const height = 500; 
const centerX = width/2;
const centerY = height/2; 
const strokewidth = 30;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius =  50;
const mouthWidth = 20;
const mouthRadius = 140;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth )
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3/2);

const BackgroundCircle = ({radius}) => (
 <circle 
           
             r={radius}
             fill ="yellow"
             stroke ="black"
             stroke-width ={strokewidth}
       />
      
  
);


const App = () => (
  <svg width = {width} height ={height}>
    <g transform ={`translate(${centerX},${centerY})`}>
  <BackgroundCircle radius={centerY - strokewidth / 2}/>      
      
     
    <circle 
             cx={-eyeOffsetX}
             cy={-eyeOffsetY}
             r={eyeRadius}
             
    />
      
  
      <circle 
             cx={eyeOffsetX}
             cy={-eyeOffsetY}
             r={eyeRadius}
             
    />
    
    <path d={mouthArc()}/>

    </g>
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
