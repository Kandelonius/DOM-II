// Your code goes here
const get = (selector) => {
    return document.querySelector(selector)
}
const header = get('header');
const logoHeading = get('.logo-heading');
const navContainerClass = get('.nav-container');
const navContainer = get('.main-navigation .container')
const busImage = get('.intro img');
const ctaH2 = get('.intro h2');
const buttonEls = document.querySelectorAll('.btn');
let headerHasEventListener = true;
let busFlipped = false;
// header.setAttribute('style', 'zIndex:1');
header.style.zIndex = '0';
function headerBackground(event){
    let headerHeight = header.clientHeight;
    let headerWidth = header.clientWidth;
    let headerRed = 255*event.offsetX/headerWidth;
    let headerGreen = 255*event.offsetY/headerHeight;
    let headerBlue = 255 - 255*event.offsetX/headerWidth;
    header.style.backgroundColor = 'rgb(' + headerRed + ',' + headerGreen + ',' + headerBlue + ')';
    // let zero = (header.clientWidth - header.clientWidth);
    // console.log(zero);
    //mouseY at the bottom of the header = 0 green = 0 y-max is 89
    //mouseY at the top of the header green = 255
    //mouseX all the way to the left of the screen red = 0 blue = 255
    //mouseX all the way to the right blue = 0 red = 255
    // console.log(`headerRed is ${headerRed}`);
    // console.log(`headerGreen is ${headerGreen}`);
    // console.log(`headerBlue is ${headerBlue}`);
    // let negative = 255 - 255*event.offsetX/headerWidth
    // console.log(negative);
}
// header.addEventListener('mousemove', event => {
    //     console.log(`x is ${event.offsetX} y is ${event.offsetY};`);
    // })

buttonEls[0].textContent = 'set header color to white';
buttonEls[1].textContent = 'toggle header color';
function headerColorToggle(event){
    if (headerHasEventListener){
        header.removeEventListener('mousemove', 
        headerBackground);
        headerHasEventListener = false;
    }else{
        header.addEventListener('mousemove', 
        headerBackground);
        headerHasEventListener = true;
    }
}
// busImage.setAttribute('style', 'zIndex:0');
// busImage.setAttribute('style', 'position:relative');

function flipImage(event){
    if(busFlipped){
        busImage.style.position = 'relative';
        busImage.style.transform = 'rotate(0deg)';
        busImage.style.zIndex = '0';
        // busImage.setAttribute('style','transform:rotate(0deg)');
        ctaH2.textContent = 'Welcome To Fun Bus!';
        busFlipped = false;
        // busImage.setAttribute('style', 'zIndex:0');
    }else {
        // busImage.setAttribute('style','transform:rotate(180deg)');
        busImage.style.position = 'relative';
        busImage.style.transform = 'rotate(180deg)';
        busImage.style.zIndex = '0';
        ctaH2.textContent += ' in Australia??'
        busFlipped = true;
        // busImage.setAttribute('style', 'zIndex:0');
    }
}

// console.log(buttonEls);
// console.log(buttonEls[1].textContent);
// var box = document.querySelector(".box");
// var pageX = document.getElementById("x");
// var pageY = document.getElementById("y");
// function updateDisplay(event) {
//   pageX.innerText = event.pageX;
//   pageY.innerText = event.pageY;
// }
// box.addEventListener("mousemove", updateDisplay, false);
// box.addEventListener("mouseenter", updateDisplay, false);
// box.addEventListener("mouseleave", updateDisplay, false);
// const signUpOne = get('.btn')
// signUpOne.addEventListener('click', event)
// const buttonChange = get('.destination .btn'){
// }
header.addEventListener('mousemove', headerBackground);
header.addEventListener('click', headerColorToggle);
buttonEls[0].addEventListener('click', event =>{
    header.style.backgroundColor = 'white';
});
buttonEls[1].addEventListener('click', headerColorToggle);
busImage.addEventListener('click', flipImage);