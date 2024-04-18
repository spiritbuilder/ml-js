let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight * 0.75;
console.log(window.innerHeight);
canvas.width = 300;
console.log("interst", canvas);

let ctx = canvas.getContext("2d");

let car = new Car(100, 100, 30, 50);

car.draw(ctx);
