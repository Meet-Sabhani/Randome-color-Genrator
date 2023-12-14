let section = document.querySelector("section");
// let Bcolor = document.getElementById("BG-Color");
// let btn = document.getElementById("btn");
// let copy = document.getElementById("copy");

let generateHexColor = () => {
  // return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
};

// let hexColor = generateHexColor();

// console.log(hexColor);

// Bcolor.innerHTML = hexColor;

// section.style.backgroundColor = Bcolor.innerHTML;

// btn.addEventListener("click", function () {
//   hexColor = generateHexColor();
//   Bcolor.innerHTML = hexColor;
//   section.style.backgroundColor = hexColor;
// });

// const text = 0.1;

// console.log(text.toString().padStart(6, "X"));
// console.log(text.toString().padEnd(6, 6));

const rgbGenerate = () => {
  return Math.floor(Math.random() * 256);
};

const upgrad = () => {
  const r = rgbGenerate();
  const g = rgbGenerate();
  const b = rgbGenerate();

  const rgb = `rgb(${r}, ${g}, ${b})`;
  // Bcolor.innerHTML = rgb;
  section.style.backgroundColor = rgb;

  console.log(rgb);
};

// upgrad();
// btn.addEventListener("click", upgrad);

// setInterval(upgrad(), 2000);  // not valid

let iner = setInterval(function () {
  upgrad();
}, 2000); // right way

section.addEventListener("click", function (){ clearInterval(iner)});

// clearTimeout(); // don't know

// setTimeout(function(){
//   upgrad()
// }, 2000)

// for (let upgrad = 0; upgrad < Infinity; upgrad++) {
//   setTimeout(function(){
//     upgrad()
//   }, 2000)
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(upgrad, i * 2000); // Call the function every 2 seconds
// }

// let count = 0;

// while (count < 5) {
//   setTimeout(upgrad, 1000);
// }
