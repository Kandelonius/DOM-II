// Your code goes here
const get = (selector) => {
    return document.querySelector(selector)
}
const header = get('header');
const funSizeReport = get('.logo-heading');
const aTags = document.querySelectorAll('a');
const busImage = get('.intro img');
const ctaH2 = get('.intro h2');
const allPs = document.querySelectorAll('p');
const boatImageAdjust = get('.content-destination img');
const buttonEls = document.querySelectorAll('.btn');
let headerHasEventListener = true;
let busFlipped = false;
// console.log(funSizeReport);
// header.setAttribute('style', 'zIndex:1');
// header.style.zIndex = '0';
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
function funSizeReporter(event){
    funSizeReport.textContent = `window width is ${window.innerWidth}`;
}
// buttonEls[0].textContent = 'does nothing';
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

for(i = 0; i < aTags.length; i++){
    aTags[i].addEventListener('click', function(event){
        event.preventDefault();
        event.stopPropagation();
    })
}
// console.log(allPs[1].textContent);
// function scrollAddWords(event){
//     allPs[i].addEventListener('scroll', function(event) {
//             allPs[i].textContent += 'Shane';
//             debugger
//         })
// }
// busImage.setAttribute('style', 'zIndex:0');
// busImage.setAttribute('style', 'position:relative');
function flipImage(event){
    if(busFlipped){
        // busImage.style.position = 'relative';
        busImage.style.transform = 'rotate(0deg)';
        // busImage.style.zIndex = '0';
        // busImage.setAttribute('style','transform:rotate(0deg)');
        ctaH2.textContent = 'Welcome To Fun Bus!';
        busFlipped = false;
        // busImage.setAttribute('style', 'zIndex:0');
    }else {
        // busImage.setAttribute('style','transform:rotate(180deg)');
        // busImage.style.position = 'relative';
        busImage.style.transform = 'rotate(180deg)';
        // busImage.style.zIndex = '0';
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
// img#myImg {
//     filter:invert(100%);
//   }
window.addEventListener('resize', funSizeReporter);
header.addEventListener('mousemove', headerBackground);
header.addEventListener('click', headerColorToggle);
document.addEventListener('keydown', event =>{
    if(event.key === 'Escape'){
        header.style.backgroundColor = 'white';
    }
});
boatImageAdjust.addEventListener("mouseover", function( event ) {  
    // debugger 
    event.target.style.filter = "invert(100%)";
    // setTimeout(function() {
    //   event.target.style.filter = "";
    // }, 1500);
}, false);
boatImageAdjust.addEventListener("mouseout", function( event ) {
    event.target.style.filter = "";
  }, false);
// allPs[1].addEventListener('mouseover', scrollAddWords);
buttonEls[1].addEventListener('click', headerColorToggle);
busImage.addEventListener('click', flipImage);