import React, { useEffect } from 'react';
//import { draw } from './sketchbook/drawingOne.js'; // Import the draw function from drawingOne.js
//import { draw } from './sketchbook/drawingTwo.js'; // Import the draw function from drawingTwo.js
import { draw } from './sketchbook/randomCirculars.js'; // Import the draw function from randomCirculars.js
//import { draw } from './sketchbook/Scratchpad.js'; // Import the draw function from Scratchpad.js


import './App.css';

function App() {
  useEffect(() => {
    // Access the canvas and its context after the component is mounted
    let canvas = document.querySelector('.canvas');
    let context = canvas.getContext('2d');

    // Call the Draw function from Drawing.js
    draw(canvas, context);

  }, []); // Empty dependency array ensures the effect runs only once after mounting

  return (
    <div className="App">
      <canvas className="canvas" width="1000" height="1000"></canvas>
    </div>
  );
}

export default App;
