var element = document.getElementById("weather");
console.log(element);
element.innerHTML = "<span>曇り</span>"

var element = document.querySelector(".clsWeather");
console.log(element);

var element = document.querySelector("dl");
console.log(element);

// Change color to red
var element = document.querySelector(".clsWeather");
element.style.color = "red";
// add .sample class
element.classList.add("sample");
