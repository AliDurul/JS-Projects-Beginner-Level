const buttons = document.querySelector(".buttons");
const topScreen = document.querySelector(".upScreen");
const bottomScreen = document.querySelector(".bottomScreen");

buttons.addEventListener("click", (e) => {
  addToBottom(e);

operator();


});



/* FUNCTIONS */
const addToBottom = (e) => {
  bottomScreen.innerText += e.target.innerText;
};


const operator = () => {
  
}