/* Liliana Marçal */

var myImage = document.querySelector('.foto');

$(".foto").on("click", function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fotoopessoal.jpg') {
      myImage.setAttribute ('src','images/fotoopessoal2.jpg');
    } else {
      myImage.setAttribute ('src','images/fotoopessoal.jpg');
    }
});

jQuery("document").ready(function($){

  var nav = $('.menu');
  var posTop = nav.position().top
  $(window).scroll(function () {
    console.log(posTop)

  if ($(this).scrollTop() > posTop ){
      nav.addClass("menu-fixo");
    } else {
      nav.removeClass("menu-fixo");
    }
  });
});
