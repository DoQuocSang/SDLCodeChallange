// layout button
var layoutButtonsContainer = document.querySelector(".layout-buttons-grid");

var layoutButtons = layoutButtonsContainer.getElementsByClassName("grid-item");

for (var i = 0; i < layoutButtons.length; i++) {
    layoutButtons[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
  });
}

// Change layout when click
var currentLayout = "simple-layout";
var mainCard = document.querySelector(".main-card");
var InfoWrapper = document.querySelector(".info-wrapper");
var nameDiv = InfoWrapper.querySelector(".name");
var priceDiv = InfoWrapper.querySelector(".price");
var mainImage = document.querySelector(".main-image");


document.querySelector(".simple-btn").addEventListener("click", () => {
    mainCard.classList.remove(currentLayout);
    mainCard.classList.add("simple-layout");
    currentLayout = "simple-layout";

    // change content
    nameDiv.innerHTML = "Classic Utility Jacket";
    priceDiv.innerHTML = "$110.00";
    mainImage.src = "https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
}); 

document.querySelector(".payful-btn").addEventListener("click", () => {
    mainCard.classList.remove(currentLayout);
    mainCard.classList.add("payful-layout");
    currentLayout = "payful-layout";

    // change content
    nameDiv.innerHTML = "Kids Jumpsuit";
    priceDiv.innerHTML = "$39.00";
    mainImage.src = "https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg"
}); 

document.querySelector(".elegant-btn").addEventListener("click", () => {
    mainCard.classList.remove(currentLayout);
    mainCard.classList.add("elegant-layout");
    currentLayout = "elegant-layout";

     // change content
     nameDiv.innerHTML = "DogTooth Style Jacket";
     priceDiv.innerHTML = "$350.00";
     mainImage.src = "https://tailwindcss.com/_next/static/media/fancy-suit-jacket.edfeb695.jpg"
}); 

document.querySelector(".brutalist-btn").addEventListener("click", () => {
    mainCard.classList.remove(currentLayout)
    mainCard.classList.add("brutalist-layout");
    currentLayout = "brutalist-layout";
    // change content
    nameDiv.innerHTML = "Retro Shoe";
    priceDiv.innerHTML = "$89.00";
    mainImage.src = "https://tailwindcss.com/_next/static/media/retro-shoe.24e25785.jpg";
}); 





// var str = "main-card pain-layout happy-layout";
// str.replace(/layout$/, "" );
// console.log(str)

