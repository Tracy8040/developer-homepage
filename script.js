const bar = document.querySelector(".fa-bars");
const menu = document.querySelector("nav .menu");
const logo = document.querySelector(".logo");


bar.addEventListener("click", ()=> { 
  menu.classList.toggle("show-menu");  
})

logo.addEventListener("click", ()=> { 
  if (window.innerWidth <= 900) {
    console.log("logo click");
    menu.classList.toggle("show-menu");  
  }
})