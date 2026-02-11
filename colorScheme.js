console.log("This is a test file.");

const body = document.querySelector("body");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.classList[0];
    // console.log(e.target.classList);
  });
});
