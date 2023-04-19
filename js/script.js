
hamburger = document.querySelector(".hamburger")

hamburger.onclick = function () {
    navBar = document.querySelector(".main-text")
    navBar.classList.toggle("active");
}


/** code by webdevtrick ( https://webdevtrick.com ) **/
$(function() {
    $('.list-heading').on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next()
        .stop()
        .slideUp(300);
      } else {
        $(this).addClass('active');
        $(this).next()
        .stop()
        .slideDown(300);
      }
    });
  });


  
const side1 = $('.side-1');
const side2 = $('.side-2');
const signInF = $('.sign-in fieldset');
const signUpF = $('.sign-up fieldset');
$('.side-1 .toggle-log').click(function () {
  side1.css({ 'transform': 'rotateY(180deg)', 'background-position': '100%' });
  side2.css({ 'transform': 'rotateY(0deg)', 'background-position': '100%' });
  signInF.attr('disabled', 'disable');
  signInF.addClass('block');
  signUpF.removeAttr('disabled');
  signUpF.removeClass('block');
});
$('.side-2 .toggle-log').click(function () {
  side1.css({ 'transform': 'rotateY(0deg)', 'background-position': '0%' });
  side2.css({ 'transform': 'rotateY(-180deg)', 'background-position': ' 0%' });
  signInF.removeAttr('disabled');
  signInF.removeClass('block');
  signUpF.attr('disabled', 'disable');
  signUpF.addClass('block');
});