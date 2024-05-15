export function draw (canvas, context) {
// Your drawing code starts here


let radius;
let x = 500;
let y = 370;
let startAngle;
let endAngle;

for (let i = 0; i < 10; i++) {
    startAngle = Math.random();
    endAngle = Math.random();
    radius = 35 * i;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.stroke();
    context.lineWidth = Math.floor(Math.random() * 5);
}

// Your drawing code ends here

}