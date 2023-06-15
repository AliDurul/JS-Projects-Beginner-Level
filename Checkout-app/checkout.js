/* --------------SELECTORS-------------- */
const navbarList = document.querySelector(".nav__list");
const productList = document.querySelector("#product-painel");

/* --------------capturing-------------- */

/* --------------VARIABLES-------------- */
const taxRate = 0.18;
const shippingPrice = 25.99;
const FreeshippingPrice = 3000;

/* --------------EVENTS-------------- */
window.addEventListener("load", (e) => {
  saveLocalStorage();
});

navbarList.addEventListener("click", (e) => {
  if (e.target.className == "nav__list--btn" || "fa-trash-can") {
    //capturing
    // e.target.previousElementSibling.textContent = "My Cart";
    //forEach ==> array - nodeList
    /*   productList.childNodes.forEach((product) => {
        product.remove();
    }); */
    e.currentTarget.firstElementChild.innerText = "My Cart";
    productList.textContent = "No any Products in the cart!";
    calculateCardPrice();
  }
});

productList.addEventListener("click", (e) => {
  //minus
  if (e.target.className == "fa-solid fa-minus") {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
    } else {
      if (
        confirm(
          `${
            e.target.closest(".main__product-info").querySelector("h2")
              .innerText
          } will be removed! `
        )
      ) {
        e.target.closest(".main__product").remove();
      }
    }
    calculateProductPrice();
  }
  //plus
  else if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.innerText++;
    calculateProductPrice();
  }
  //delete
  else if (e.target.id == "remove-product") {
    if (
      confirm(
        `${
          e.target.closest(".main__product-info").querySelector("h2").innerText
        } will be removed! `
      )
    ) {
      e.target.closest(".main__product").remove();
    }
  }
  calculateCardPrice();
});

/* --------------FUNCTIONS-------------- */
const saveLocalStorage = () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("FreeshippingPrice", FreeshippingPrice);
};

const calculateProductPrice = () => {};
const calculateCardPrice = () => {};
