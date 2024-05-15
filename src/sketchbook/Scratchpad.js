export function draw(canvas, context) {
// Your drawing code starts here

    // Array
    let menu = ['starter','main','dessert','drinks','snacks', 'sides'];

    //  Loop
    for (let i = 0; i < menu.length; i++){
      // let i = 0; declare the first item in the array
      // i < 5; loop through the array 5 times. And i < menu.length; loop through the array dynamically
      // i++; increment the item by 1 each loop
        console.log(menu[i]);
    }

    // Another loop and push example
    let years = []; // Empty array

    // Add items to the array
    for (let i = 0; i < 10; i++) {
      years.push(2024 + i);
    }
    console.log(years);

    // For each loop
    menu.forEach(item => {
        console.log(item);
    });

    // Conditional
    for (let i = 0; i < menu.length; i++) {
        if (i > 3) {
            console.log('heyo ');
        }
    }


// Your drawing code ends here
}