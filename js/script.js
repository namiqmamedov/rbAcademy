$(document).ready(function() {  
  $('.account-content ul li a').click(function(){  
    $('.account-content li a').removeClass("active");  
    $(this).addClass("active");  
});  
});  



hamburger = document.querySelector(".hamburger")

hamburger.onclick = function () {
    navBar = document.querySelector(".main-text")
    navBar.classList.toggle("active");
}

// nav box shadow adding in scroll

var navBar = document.getElementById('header-main')

window.addEventListener('scroll', () => {
  if(window.scrollY > 100){
    navBar.classList.add('active')
  }
  else{
    navBar.classList.remove('active')
  }
})

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



