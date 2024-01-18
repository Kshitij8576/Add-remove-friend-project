var ista = document.querySelector("h4")
var btn = document.querySelector("#bton")
a = 0
btn.addEventListener("click",function(){
    if(a == 0){
        ista.innerHTML = "Friends"
        ista.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.color = "black"
        btn.style.backgroundColor = "#dadada"
        a = 1
    }else{
        ista.innerHTML = "Stranger"
        ista.style.color = "red"
        btn.innerHTML = "Add friend"
        btn.style.color = "white"
        btn.style.backgroundColor = "rgba(44, 231, 44, 0.885)"
        a = 0
    }
})