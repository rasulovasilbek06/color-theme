const form = document.querySelector(".form")
const label = document.querySelector(".form__label")
const input = document.querySelector(".form__input")
const prewBtn = document.querySelector(".prew")
const nextBtn = document.querySelector(".next")
const roundWrapper = document.querySelector(".round-wrapper")
const body = document.querySelector("body")
const colorArray = []
let count;
let audio = new Audio("sound/button-click.wav");

form.addEventListener("submit" , function(e){
    e.preventDefault()
    body.style.background = input.value
    if(body.style.background === input.value && input.value != colorArray[colorArray.length - 1]){
        colorArray.push(input.value)
        roundWrapper.innerHTML += `<div class="round" style="background:${input.value}"></div>`

        for(i = 0;i < roundWrapper.childNodes.length; i++) {
            roundWrapper.childNodes[i].classList.remove("round-toggle")
        }
        roundWrapper.childNodes[roundWrapper.childNodes.length - 1].classList.add("round-toggle")
    }
    count = colorArray.length - 1
    console.log(colorArray);
    input.value = ""
})

prewBtn.addEventListener("click" , ()=> {
    if(count > 0) {
        count--
        body.style.background = colorArray[count]
        console.log(count);
        audio.play();
        for (i = 0; i < roundWrapper.childNodes.length; i++) {
            roundWrapper.childNodes[i].classList.remove("round-toggle")
        }
        roundWrapper.childNodes[count].classList.add("round-toggle")
    }
})

nextBtn.addEventListener("click" , ()=> {
    if (count < colorArray.length - 1) {
        count++
        body.style.background = colorArray[count]
        console.log(count);
        for (i = 0; i < roundWrapper.childNodes.length; i++) {
            roundWrapper.childNodes[i].classList.remove("round-toggle")
            audio.play();
        }
        roundWrapper.childNodes[count].classList.add("round-toggle")
    }
})