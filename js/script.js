
const navsearch = document.getElementById('search_nav');
const burgersearch = document.getElementById('search_burger');
const overlaysearch = document.getElementById('overlay_search');
const closesearch = document.getElementById('close-btn');
const searchbox = document.getElementById('search-box');

burgersearch.addEventListener('click', () => {
    burgersearch.classList.add('search-active');
    navsearch.classList.add('translate-active');
    navsearch.classList.add('d-block');
    overlaysearch.classList.add('active');
    searchbox.classList.remove('d-none');
    searchbox.classList.add('d-block');

});
overlaysearch.addEventListener('click', () => {
  overlaysearch.classList.remove('active');
  navsearch.classList.remove('translate-active');
  navsearch.classList.remove('close-btn');
  searchbox.classList.add('d-none');
});

closesearch.addEventListener('click', () => {
  searchbox.classList.remove('d-block');
  searchbox.classList.add('d-none');

});



// nav box shadow adding in scroll

var navBar = document.getElementById('header-main')

window.addEventListener('scroll', () => {
  if(window.scrollY > 40){
    navBar.classList.add('active-header')
  }
  else{
    navBar.classList.remove('active-header')
  }
})


// hamburger menu 

hamburger = document.querySelector(".hamburger")

hamburger.onclick = function () {
    navBar1 = document.getElementById("main-text")
    navBar1.classList.toggle("show-menu");
}

$(document).ready(function() {
  $('.account-content ul li a').click(function() {
      $('.account-content ul li a').removeClass("active");
      $(this).addClass("active");
  });
});


const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
const closeNavbar = document.getElementById('close-nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});


closeNavbar.addEventListener('click', () => {
  burger.classList.remove('active');
  nav.classList.remove('active');
  overlay.classList.remove('active');
})

hamburger = document.querySelector(".hamburger")

hamburger.onclick = function () {
    navBar = document.querySelector(".main-text")
    navBar.classList.toggle("active");
}

// animation login page 


var password = document.getElementById('inputBox');
var icon = document.getElementById('toggle-password');

// input show hide button

myPass = () => {
   if(password.type == 'password'){
      password.setAttribute('type','text');
      icon.classList.remove('fa-eye')
      icon.classList.add('fa-eye-slash');
   }
   else{
      icon.classList.add('fa-eye');
      icon.classList.remove('fa-eye-slash');
      password.setAttribute('type','password');
   }
}

icon.addEventListener('click', myPass)

const viewBtn = document.querySelector(".view-modal"),
popup = document.querySelector(".popup"),
close = popup.querySelector(".close"),
field = popup.querySelector(".field"),
input = field.querySelector("input"),
copy = field.querySelector("button");

viewBtn.onclick = ()=>{
  popup.classList.toggle("show");
}
close.onclick = ()=>{
  viewBtn.click();
}

copy.onclick = ()=>{
  input.select(); //select input value
  if(document.execCommand("copy")){ //if the selected text copy
    field.classList.add("active");
    copy.innerText = "Copied";
    setTimeout(()=>{
      window.getSelection().removeAllRanges(); //remove selection from document
      field.classList.remove("active");
      copy.innerText = "Copy";
    }, 3000);
  }
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "395px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNavSecond() {
  document.getElementById("mySidenavSecond").style.width = "395px";
}

/* Set the width of the side navigation to 0 */
function closeNavSecond() {
  document.getElementById("mySidenavSecond").style.width = "0";
}


