/* SELECTORS */
const buttons = document.querySelector(".buttons");
const bottomScreen = document.querySelector(".bottomScreen");
const upScreen = document.querySelector(".upScreen");
const allScreen = document.querySelector(".screen");
const dote = document.querySelector(".dote");

/* VARIABLES */
let fNum = 0;
let sNum = 0;
let choosedOp = "";
let result = 0;

/* addEventListener */
buttons.addEventListener("click", (e) => {
  addToBottom(e);
  operator(e);
});

bottomScreen.addEventListener("click", () => {
  bottomScreen.innerText = bottomScreen.innerText.slice(0, -1);
});

/* FUNCTIONS */
const addToBottom = (e) => {
  // if (!e.target.classList.contains("buttons")) {
  //   bottomScreen.innerText += e.target.innerText;
  // }

  if (!e.target.classList.contains("buttons")) {
    const buttonText = e.target.innerText;
    if (buttonText === "." && bottomScreen.innerText.includes(".")) {
      // Eğer eklenecek karakter nokta ise ve ekranda zaten nokta varsa işlem yapma
      return;
    }
    bottomScreen.innerText += buttonText;
  }
};

const operator = (e) => {
  if (e.target.classList.contains("operator")) {
    upScreen.innerText = bottomScreen.innerText;
    fNum = Number(bottomScreen.innerText.slice(0, -1));
    choosedOp = upScreen.innerText[upScreen.innerText.length - 1];
    bottomScreen.innerText = "";
    if (e.target.classList.contains("minus")) {
      const minus = "-";
      bottomScreen.innerText = minus + fNum;
      upScreen.innerText = bottomScreen.innerText;
    }
  } else if (e.target.classList.contains("equal")) {
    upScreen.innerText += bottomScreen.innerText.slice(0, -1);
    sNum = Number(bottomScreen.innerText.slice(0, -1));
    bottomScreen.innerText = calculate(fNum, sNum, choosedOp);
    if (
      bottomScreen.innerText === "undefined" &&
      e.target.classList.contains("equal")
    ) {
      alert("deger gir");
      bottomScreen.innerText = "";
    }
  } else if (e.target.classList.contains("clear")) {
    fNum = 0;
    sNum = 0;
    choosedOp = "";
    result = 0;
    allScreen.innerText = "";
    location.reload();
  }
};

const calculate = (fNum, sNum, choosedOp) => {
  if (choosedOp === "+") return fNum + sNum;
  else if (choosedOp === "-") return (fNum - sNum).toFixed(2);
  else if (choosedOp === "÷") {
    if (sNum === 0) {
      return "HATA!!!";
    } else {
      return (fNum / sNum).toFixed(5);
    }
  } else if (choosedOp === "x") return (fNum * sNum).toFixed(2);
  else if (choosedOp === "%") return (fNum * sNum) / 100;
};