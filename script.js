var overlay=document.querySelector("#overly")
var popbox=document.querySelector("#popbx")

var plusbutton=document.querySelector("#buttonadd")

plusbutton.addEventListener("click", function(){
    overlay.style.display="block"
    popbox.style.display="block"
})


var cancelpop=document.querySelector("#cancel-popup")

cancelpop.addEventListener("click", function(event){
    event.preventDefault()
    overlay.style.display="none"
    popbox.style.display="none"
})

    var addpop=document.querySelector("#add-popup")

    var title=document.querySelector("#book-title-input")
    var author=document.querySelector("#book-author-input")
    var description=document.querySelector("#book-description-input")

    


    var head2=document.createElement("h2")

    var containe=document.querySelector("#container")
    var head5=document.createElement("h5")
    var para=document.createElement("p")
    var button=document.createElement("button")
    
    addpop.addEventListener("click",function(event){

    event.preventDefault()
    var division=document.createElement("div")
    division.setAttribute("class","bookcontainer")
    division.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    containe.append(division)
    overlay.style.display="none"
    popbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}