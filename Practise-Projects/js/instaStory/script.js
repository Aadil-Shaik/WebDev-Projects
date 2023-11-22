var arr = [
    {
        dp:"https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
        story:"https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
        story:"https://images.unsplash.com/photo-1630006613508-87dfb1b516c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1948&q=80",
        story:"https://images.unsplash.com/photo-1602831412005-d8efa804b7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        story:"https://images.unsplash.com/photo-1589634749362-a8ef3056cbe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1569001178320-92c99c3f1a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        story:"https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
        dp:"https://images.unsplash.com/photo-1595712328338-0badd5d5f15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
        story:"https://images.unsplash.com/photo-1583051772664-7b5ddb0b907f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
]

var clutter="";

arr.forEach(function(val,index){
    clutter += `<div class="story">
    <img
      id = "${index}"
      class = "${"story"+index}"
      src="${(val.dp)}}"
      alt=""
    />
  </div>`
})
var storyContainer = document.querySelector(".top");

storyContainer.innerHTML = clutter

var storyPreview = document.querySelector(".storyPreview")
var timeOut = document.querySelector(".timeOut")

storyContainer.addEventListener("click",function(details){
    console.log(details.target)
    console.log(arr[details.target.id])
})

storyContainer.addEventListener("click",function(details){
    storyPreview.style.display = "block"
    storyPreview.style.backgroundImage = `url(${arr[details.target.id].story})`
    timeOut.style.width = "100%"

    setTimeout(function(){
        storyPreview.style.display = "none"
        timeOut.style.transition = "all linear 0s"
        timeOut.style.width = "0%"
    },3000)

    setTimeout(function(){
        timeOut.style.transition = "all linear 3s"
    },3200)
})