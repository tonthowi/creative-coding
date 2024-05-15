export function draw(canvas, context) {
// Your drawing code starts here

    
    // Create rectangle with width 270 and height 270 and fill color with teal
    context.fillStyle = 'teal';
    context.fillRect(0, 0, 270, 270); // (x, y, width, height)

    // Create rectangle stroke only
    context.beginPath();
    context.lineWidth =1; // Line width
    context.rect(280, 0, 270, 270); // (x, y, width, height)
    context.stroke(); // Stroke

    // Create circle
    context.beginPath();
    context.lineWidth = 1; // Line width
    context.arc(400, 40, 100, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle)
    context.stroke(); //


// Your drawing code ends here
}