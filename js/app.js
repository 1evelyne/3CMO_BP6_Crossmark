$(document).ready(function(){
  /*ShowTeam*/
    $("button").click(function(e){
      e.preventDefault();
        $(".teambox").slideToggle();
    });
    /*ShowOfferte*/
    $("button").click(function(e){
        e.preventDefault();
        $(".offertebox").slideToggle();
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
/*REFERENTIES GRID*/
$( function() {
  var $referentiegrid = $('#referentiegrid');
  $referentiegrid.isotope({
    masonry: {columnWidth: 70},
    masonryHorizontal: {rowHeight: 70}
  });
  var isVertical = true;
  $('#toggle').click( function() {
    isVertical = !isVertical;
    // set container size styles
    var sizeStyle = isVertical ?
      { width: '100%', height: $referentiegrid.height() } :
      { height: '80%', width: $referentiegrid.width() };
    // disable transition styles for a second
    $referentiegrid.addClass('no-transition').css( sizeStyle );
    // trigger redraw, see http://blog.alexmaccaw.com/css-transitions
    var redraw = $referentiegrid[0].offsetHeight;
    // re-enable transition and trigger different layoutMode
    $referentiegrid.removeClass('no-transition')
      .isotope({
        layoutMode: isVertical ? 'masonry' : 'masonryHorizontal'
      });

  });

});
