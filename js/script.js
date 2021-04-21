$(function(){
 // Открытие меню
  $('#open').click(function(){

    $('.main-menu').css("marginRight", "0px");
    $('#open').css("display", "none");
    $('#close').css("display", "block");
  });

  $('#close').click(function(){

    $('.main-menu').css("marginRight", "-300px");
    $('#close').css("display", "none");
    $('#open').css("display", "block");
  });

  $('#stock').click(function(){
    $('.modal_stock').css("display", "block");
  });

  $('.btn_close').click(function(){

    $('.modal_stock').css("display", "none");
  });

});

// Аккардион
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("activ");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
// Слайдер
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activ", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activ";
}
