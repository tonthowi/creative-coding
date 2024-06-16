const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1200, 1200 ] //Canvas dimensions in pixels
};

const sketch = () => {
  return ({ context, width, height }) => {
    // Canvas
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    // Your drawing code starts here
    const x = width / 2; // Center the object width in the canvas
    const y = height / 2; // Center the object height in the canvas
    let startAngle;
    let endAngle;
    let radius;

    for (let i = 0; i < 20; i++) {
        startAngle = Math.random() * 2 * Math.PI;
        endAngle = Math.random() * 2 * Math.PI;
        radius = (width * 0.02) * i;

        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle);
        context.stroke();
        context.strokeStyle = 'white';
        context.lineWidth = Math.floor(Math.random() * 10);
    }
    // Your drawing code ends here

  };
};

canvasSketch(sketch, settings);
