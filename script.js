var h3 = document.querySelector("h3");
var direction = document.querySelector(".direction");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");


function gradientGenerator(){
    body.style.background = "linear-gradient(" +direction.value+", " +input1.value+ ", " +input2.value+")";
    h3.textContent = body.style.background + ";";
}


input1.addEventListener("input", gradientGenerator);

input2.addEventListener("input", gradientGenerator);

direction.addEventListener("input", gradientGenerator);