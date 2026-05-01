const portfolioScroll = document.getElementById("portfolio__scroll");
const portfolioItems = document.querySelector(".portfolio__links--item");
const arrowRight = document.getElementById("right-arrow");
const arrowLeft = document.getElementById("left-arrow");
const overlay = document.getElementById("overlay");
const burger = document.getElementById("burger");
const header = document.getElementById("header");

function scrollPortfolio(movement) {
    const width = portfolioItems.clientWidth;
    const scrollLeft = movement ? portfolioScroll.scrollLeft + width : portfolioScroll.scrollLeft - width;
    portfolioScroll.scrollLeft = scrollLeft;
    const maxScrollWidth = portfolioScroll.scrollWidth - portfolioScroll.clientWidth;


    if (scrollLeft <= 0) {
        arrowLeft.style.visibility = "hidden";
    } else {
        arrowLeft.style.visibility = "visible";
    }
    
    if (scrollLeft >= maxScrollWidth - 20) {
        arrowRight.style.visibility = "hidden";
    } else {
        arrowRight.style.visibility = "visible";
    }
}

function burgerClick() {
    header.style.transform = "translateX(0)";
    overlay.style.visibility = "visible";
    burger.style.visibility = "hidden";
    document.body.classList.add("no-scroll");
}

function overlayClick() {
    header.style.transform = "translateX(100%)";
    overlay.style.visibility = "hidden";
    burger.style.visibility = "visible";
    document.body.classList.remove("no-scroll");
}

function resizeWindow() {
    if (window.innerWidth > 765)
    {
        burger.style.visibility = "hidden";
        header.style.transform = "";
        overlay.style.visibility = "hidden";
    }
    else
    {
        burger.style.visibility = "visible";
    }
}

window.addEventListener('resize', resizeWindow);