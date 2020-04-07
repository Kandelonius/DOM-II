// Your code goes here
const get = (selector) => {
    return document.querySelector(selector)
}

const header = get('header');
function headerBackground(event){
    // let zero = (header.clientWidth - header.clientWidth);
    // console.log(zero);
    //mouseY at the bottom of the header = 0 green = 0 y-max is 89
    //mouseY at the top of the header green = 255
    //mouseX all the way to the left of the screen red = 0 blue = 255
    //mouseX all the way to the right blue = 0 red = 255
    let headerHeight = header.clientHeight;
    let headerWidth = header.clientWidth;
    let headerRed = 255*event.offsetX/headerWidth;
    let headerGreen = 255*event.offsetY/headerHeight;
    let headerBlue = 255 - 255*event.offsetX/headerWidth;
    header.style.backgroundColor = 'rgb(' + headerRed + ',' + headerGreen + ',' + headerBlue + ')';
    // console.log(`headerRed is ${headerRed}`);
    // console.log(`headerGreen is ${headerGreen}`);
    // console.log(`headerBlue is ${headerBlue}`);
    // let negative = 255 - 255*event.offsetX/headerWidth
    // console.log(negative);
}
header.addEventListener('mousemove', headerBackground);
// header.addEventListener('mousemove', event => {
//     console.log(`x is ${event.offsetX} y is ${event.offsetY};`);
// })
const buttonEls = document.querySelectorAll('.btn');
buttonEls[1].textContent = 'turn off header color';
function headerColorToggle(event){
    header.removeEventListener('mousemove', headerBackground);
    // debugger
}
buttonEls[1].addEventListener('click', headerColorToggle);
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