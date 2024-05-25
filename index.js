let calBody = document.querySelector(".calculator-body");
let btn = document.querySelectorAll("button");
let screen = document.getElementById("screen");


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (btn[i].innerHTML == "="){
      screen.innerHTML = eval(screen.innerHTML);
     } else{
      if(btn[i].innerHTML == "AC") {
        screen.innerHTML = '';
      } else {
        screen.innerHTML += btn[i].innerHTML;
      }
    }

})
}