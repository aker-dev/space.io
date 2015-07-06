// init Isotope
var $grid = $('.grid').isotope();

$(function() {

//	idleReset(180000);

	$grid.isotope({
		itemSelector: '.card',
			percentPosition: true,
		 	masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.col-md-3',
		  }
	});
	// $grid.isotope('shuffle');

	// filtres isotopes sur les boutons
	$('.btn-tag').click(function(event) {
		if ($(this).hasClass( "tag-id-all" )) {
			$grid.isotope({ filter: '*' });
		//	$grid.isotope('shuffle');
		}
		if ($(this).attr( "data-tag-id")) {
			$grid.isotope({ filter: '.tag-id-' + $(this).attr( "data-tag-id") });
		}
	});

	// ouvre page dans le modal
	$('.btn-page').click(function(event) {
		if ($(this).attr( "data-dest-url")) {
			var destUrl = $(this).attr( "data-dest-url");
			$('.modal-body').load(destUrl);
			$('.modal-page').modal('show');
		}
	});

	// décharge page dans le modal
	$('.modal-page').on('hidden.bs.modal', function (e) {
		$('.modal-body').html('');
	//	$grid.isotope({ filter: '*' });
	});

});

function idleReset(time) {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer; // catches touchscreen presses
    window.onclick = resetTimer;     // catches touchpad clicks
    window.onscroll = resetTimer;    // catches scrolling with arrow keys
    window.onkeypress = resetTimer;

    function backHome() {
    	location.reload();
       	console.log("idle for " + time);
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(backHome, time);  // time is in milliseconds
    }
}
