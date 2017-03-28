$(document).ready(function(){
    $("button").click(function(){
        $(".teambox").slideToggle();
    });

/*REFERENTIES*/
    $('.main-iso').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});
// Isotope klik functie
$('.iso-nav ul li').click(function() {
  $('.iso-nav ul li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.main-iso').isotope({
    filter: selector
  });
  return false;
});
//wrapper
var $wrapper = $('.wrapper').isotope({
  itemSelector: '.item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer'
  }
});
$wrapper.imagesLoaded().progress(function() {
  $wrapper.isotope('layout');
});

/*$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 100
  }
});*/


});
