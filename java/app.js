// open button
let button = document.querySelector('nav button')
let aside = document.querySelector('aside')
function openSidebar (){
    aside.classList.add('active')
}
button.addEventListener("click",openSidebar)

// close button

let btn = document.querySelector('.btn')
function closeSidebar(event){
    if (event.target.classList.contains("aside") || event.target.classList.contains("btn"))     
    {
        aside.classList.remove('active')
    }

}
btn.addEventListener("click",closeSidebar)
aside.addEventListener("click",closeSidebar)

// dark mode

let darkbtn = document.querySelector('.darkbtn')
let body = document.querySelector('body')
let heading = document.querySelector('#dark .darkArea h1')
function setdark(){
    body.classList.toggle('darkmode') 
    if(body.classList.contains('darkmode')){
        heading.innerHTML="Dark Mode"
    }
    else{
        heading.innerHTML="Light Mode"
    }
}
darkbtn.addEventListener("click",setdark)