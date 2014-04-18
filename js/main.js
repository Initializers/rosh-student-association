$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);                  
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");

/*
    Scrolling function 
*/
// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#intro').offset().top + $('#intro').height();

$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar-default').addClass('past-main');
    } else {
        $('.navbar-default').removeClass('past-main');
    }

});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

/*Chrome fix*/
// run js if Chrome is being used
if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    // set background-attachment back to the default of 'scroll'
    $('.imagebg').css('background-attachment', 'scroll');

    // move the background-position according to the div's y position
    $(window).scroll(function(){

        scrollTop = $(window).scrollTop();
        photoTop = $('.imagebg').offset().top;
        distance = (photoTop - scrollTop);
        $('.imagebg').css('background-position', 'center ' + (distance*-1) + 'px');

    });
}  