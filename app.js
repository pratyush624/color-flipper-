const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // console.log(document.body);
  //Get random number between 0-3
  const randomNumbner = () => {
    return Math.floor(Math.random() * colors.length);
  };
  // console.log(randomNumbner());

  document.body.style.backgroundColor = colors[randomNumbner()];
  color.textContent = colors[randomNumbner()];
});
