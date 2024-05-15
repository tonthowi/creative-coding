export function draw (canvas, context) {
// Your drawing code starts here


let radius;
let x = 500;
let y = 370;
let startAngle = 0;
let endAngle = Math.PI * 2;

for (let i = 0; i < 8; i++) {
    startAngle = Math.random();
    endAngle = Math.random();
    radius = 50 * i;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.stroke();
    context.lineWidth = 10;
}

// Your drawing code ends here

}