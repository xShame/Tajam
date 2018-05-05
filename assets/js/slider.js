
var mySpan = document.getElementsByTagName('span');

var slideIndex = 1;
var dots = document.getElementsByClassName("dot");
var slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
    // dots.style.width = '70px';
  }
  // var activeDots = document.querySelector('.dot');
  // for (i = 0; i < activeDots.length; i++) {
  // }
  // document.getElementsByClassName('dot').addEventListener('click', function(){

  // });
