//  function ibg(){
// $.each($('.ibg'), function(index, val) {
// if($(this).find('img').length>0){
// $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// }
// });
// }
// ibg();


 // $(function(){

 //  $('.slick-slider').slick({
 //    arrows:false,
 //  	autoplay:3000,
 //  	slidesToShow: 1,
 //    adaptiveHeight: false,
 //    fade:true,

      
 //  });
 // });


$(function(){

  $('.slick-slider-body ').slick({
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    fade:true
  });
 });
