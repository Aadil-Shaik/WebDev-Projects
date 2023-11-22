var element = document.querySelectorAll(".elem")

element.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[1].style.opacity = "1"
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[1].style.opacity = "0"
    })
    val.addEventListener("mousemove",function(coordinates){
        val.childNodes[1].style.left = coordinates.x+"px"
        val.childNodes[1].style.top = coordinates.y+"px"
    })
})