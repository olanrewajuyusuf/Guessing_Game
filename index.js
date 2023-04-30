let num = document.querySelectorAll(".numbers div");
let result = document.querySelector("h4");
let answer = document.querySelector(".result");
let card = document.querySelector(".display");
let button = document.querySelector(".submit");
let modal = document.querySelector(".modal");
let container = document.querySelector(".container");

let secretNum = Math.floor(Math.random() * 5);
console.log(secretNum);
let count = 0;

num.forEach((n) => {
  n.addEventListener("click", function () {
    if (n.innerHTML == secretNum) {
      card.style.animation = "rotate 0.1s linear 10";
      result.innerHTML = "You won!";
      answer.innerHTML = "Congratulations";
    } else {
      result.innerHTML = "You Lose! ";
      if (count == 0) {
        count++;
        answer.innerHTML = "Try again";
        n.style.background = "gray";
        n.style.border = "1px solid";
      } else if (count == 1) {
        count++;
        answer.innerHTML = "Try again";
        n.style.background = "gray";
        n.style.border = "1px solid";
      } else if (count == 2) {
        count++;
        answer.innerHTML = "Try again";
        n.style.background = "gray";
        n.style.border = "1px solid";
      } else if (count == 3) {
        card.style.animation = "rotate 0.1s linear 10";
        n.style.background = "gray";
        n.style.border = "1px solid";
        answer.innerHTML = "The correct number is: " + secretNum;
      }
    }
  });
});

setTimeout(() => {
  modal.style.display = "none";
  container.style.display = "block";
}, 5000);

button.addEventListener("click", function () {
  history.go();
});
