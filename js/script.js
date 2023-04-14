
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