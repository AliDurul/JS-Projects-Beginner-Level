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
      calculateProductPrice(e.target);
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
        calculateCartPrice();
      }
    }
  }
  //plus
  else if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.innerText++;
    calculateProductPrice(e.target);
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

const calculateProductPrice = (btn) => {
  const infoDiv = btn.closest(".main__product-info");
  const price = infoDiv.querySelector(".main__product-price strong").innerText;
  const quantity = infoDiv.querySelector("#quantity").innerText;

  console.log(quantity);
  infoDiv.querySelector(".main__product-line-price").innerText = (
    price * quantity
  ).toFixed(2);
};
const calculateCardPrice = () => {
  const productPriceDivs = productList.querySelectorAll(
    ".main__product-line-price"
  );
  let subtotal = 0;
  productPriceDivs.forEach((p) => {
    subtotal += parseFloat(p.innerText);
  });
  console.log(subtotal);

  const taxPrice = subtotal * localStorage.getItem("taxRate");

};
