export function draw(canvas, context) {
// Your drawing code starts here
    
        
    // Loop and array of the rectangles
    for (let i = 0; i < 5; i++) {
      context.beginPath();
      context.rect(100 + 100 * i, 0, 20, 20);
      context.stroke();
    }

    // Loop and array of the rectangles but with variable
    for (let i = 0; i < 5; i++) {

        let gap = 10;
        let width = 50;
        let height = 50;
        let x = 50 + (width + gap) * i;
        let y = 50;


        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();
    }

    // loop and array of the rectangles but with nested loops
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 2; j++) {
            let gap = 10;
            let width = 75;
            let height = 75;
            let x = 100 + (width + gap) * i;
            let y = 100 + (height + gap) * j;

            context.beginPath();
            context.rect(x, y, width, height);
            context.stroke();
            

            context.beginPath();
            context.rect(x + 10, y + 10, width - 20, height - 20);
            context.stroke();
        }
    }

    // loop and array of the rectangles but with nested loops and conditional
    
    // Rule of thumb: Always go with Const unless the variable is changeable (then use let instead).
    // Const can be placed outside of the function or loop.
    const gap = 10; // Constant value for gap
    const width = 100; // Constant value for width
    const height = 100; // Constant value for height
    let x, y; // x and y is a subject to change, therefore use Let instead of Const.

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {

            x = 10 + (width + gap) * i;
            y = 300 + (height + gap) * j;

            context.beginPath();
            context.rect(x, y, width, height);
            context.stroke();
            context.lineWidth = 2;

            //if (i > 0 && i < 4) { // If i greater than 0 and less than 4
            if (Math.random() < 0.5) { // randomize
                context.beginPath();
                context.rect(x + 10, y + 10, width - 20, height - 20);
                context.stroke();
                
            }

        }
    }
    
    
// Your drawing code ends here
}