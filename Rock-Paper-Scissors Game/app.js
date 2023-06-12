/* Selectors */
const selectionArticle = document.querySelector(".selection");
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");
const messagePar = document.querySelector(".message");
const scoreCard = document.querySelector(".score-card");
const pcScoreSpan = document.querySelector("#pc-score");
const yourScoreSpan = document.querySelector("#your-score");
const modalCardSection = document.querySelector(".modal-card");
const finalMessagePar = document.querySelector("#final-message");
const playAgainBtn = document.querySelector("#play-again");

/* Variables */
const userSelectimage = document.createElement("img");
const pcSelectimage = document.createElement("img");

const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

/* Event Listeners */
selectionArticle.addEventListener("click", (e) => {
  if (e.target.id) {
    userSelectimage.src = e.target.src;
    userSelectimage.alt = e.target.id;
    yourChoiceDiv.append(userSelectimage);
    createPcSelection();
  }
});


playAgainBtn.addEventListener('click',()=>{
  modalCardSection.classList.toggle('show')
  window.location.reload()
})

/* Functions */
const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectimage.src = `./assets/${pcRandom}.png`;
  pcSelectimage.alt = pcRandom;
  pcChoiceDiv.append(pcSelectimage);
  calculateResult();
};

const calculateResult = () => {
  if (userSelectimage.alt === pcSelectimage.alt) {
    draw();
  } else if (userSelectimage.alt === "rock") {
    pcSelectimage.alt === "paper" ? youLost() : youWin();
  } else if (userSelectimage.alt === "scissor") {
    pcSelectimage.alt === "rock" ? youLost() : youWin();
  } else if (userSelectimage.alt === "paper") {
    pcSelectimage.alt === "scissor" ? youLost() : youWin();
  }

  document.querySelector('#top-score').textContent = `${yourScoreSpan.textContent} : ${ pcScoreSpan.textContent}`
  if (pcScoreSpan.textContent === "5" || yourScoreSpan.textContent === "5") {
    openModal();
  }
};

const draw = () => {
  messagePar.textContent = "It is row";
  scoreCard.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};

const youLost = () => {
  messagePar.textContent = "You lost";
  scoreCard.style.color = RED;
  messagePar.style.backgroundColor = RED;
  pcScoreSpan.textContent++;
};
const youWin = () => {
  messagePar.textContent = "You Won";
  scoreCard.style.color = GREEN;
  messagePar.style.backgroundColor = GREEN;
  yourScoreSpan.textContent++;
};

const openModal = () => {
  modalCardSection.classList.add("show");
  if (yourScoreSpan.textContent === "5") {
    finalMessagePar.textContent = "😎 You Won 😎";
    document.querySelector(".modal").style.backgroundColor = GREEN;
    playAgainBtn.style.color = GREEN;
    messagePar.style.display = 'none'
  } else {
    finalMessagePar.textContent = "😂 You Lost 😂";
    document.querySelector(".modal").style.backgroundColor = RED;
    playAgainBtn.style.color = RED;
    messagePar.style.display = 'none'

  }
};
