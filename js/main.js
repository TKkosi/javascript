let onbtn = document.querySelector("button")
let offbtn = document.querySelector("#off")
let barny = document.querySelector("img")

onbtn.addEventListener("click", function(){

})

function turnon(){ 
    barny.setAttribute("src", "on.jpeg")
}    
function turnoff(){ 
    barny.setAttribute("src", "off.jpeg")
}