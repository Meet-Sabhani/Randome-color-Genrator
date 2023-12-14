let Bcolor = document.getElementById("BG-Color");
let section = document.querySelector("section");
let btn = document.getElementById("btn");
let copy = document.getElementById("copy");

let generateHexColor = () => {
  return `#${Math.random().toString(16).slice(2, 8)}`;
};

const text = 2;

console.log(text.toString(16));

let hexColor = generateHexColor();

console.log(hexColor);

Bcolor.innerHTML = hexColor;

section.style.backgroundColor = Bcolor.innerHTML;

btn.addEventListener("click", function () {
  hexColor = generateHexColor();
  Bcolor.innerHTML = hexColor;
  section.style.backgroundColor = hexColor;
});
