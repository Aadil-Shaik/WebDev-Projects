var contain = document.querySelector("#container")
var heart = document.querySelector("i")

contain.addEventListener("dblclick",function(){
    heart.style.transform = 'scale(1)';
    setTimeout(function(){
        heart.style.opacity = "0"
    },2000)
    setTimeout(function(){
        heart.style.transform = 'scale(0)'; 
    },2400)
    setTimeout(function(){
        heart.style.opacity = "1";
    },2800)
})