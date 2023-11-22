var text = document.querySelector("#greeting");
var addFriend = document.querySelector("#button");
var flag = 0;

addFriend.addEventListener("click", function(){
    if(flag == 0){
        addFriend.style.backgroundColor= "crimson";
        addFriend.style.color="white";
        addFriend.innerHTML="Remove Friend";
        text.innerHTML = "We are already friend!</br>Why? You don't like me?";
        flag = 1;
    }
    else{
        addFriend.style.backgroundColor= "#16FF00";
        addFriend.style.color="black";
        addFriend.innerHTML="Add Friend";
        text.innerHTML = "We are not friends yet.</br> How about becoming now?";
        flag = 0;
    }
})