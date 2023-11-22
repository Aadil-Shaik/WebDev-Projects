var customCursor = document.querySelector(".cursor");
var container = document.querySelector(".main")
var text = document.querySelector(".name")

container.addEventListener("mousemove",function(coordinates){
    customCursor.style.left = coordinates.x+"px";
    customCursor.style.top = coordinates.y+"px";
})
