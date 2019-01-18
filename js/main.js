; (function ($) {
    "use strict";

    let Slider = $('.ba-resent__slick');

    Slider.slick({
		slide: '.ba-resent--slider',
		prevArrow:'.ba-resent-prev',
		nextArrow:'.ba-resent-next',
        dots: true
    });

let teamSlider = $('.ba-team-slider');
teamSlider.slick({
	slide: '.ba-team-slider--img',
	prevArrow:'.ba-team-prev',
	nextArrow:'.ba-team-next',
 // slidesToShow: 3,
 // slidesToScroll: 1,
	dots: false
});
})(jQuery);

function initMap() {
	const centrCoord = {lat: -7.944800, lng: 112.619317};
	const map = new google.maps.Map(
			document.querySelector('.ba-map'), {
				zoom: 14,
				center: centrCoord,
				disableDefaultUI: true
			});
		}
