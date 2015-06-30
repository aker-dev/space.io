// init Isotope
var $grid = $('.grid').isotope();

$(function() {

	$grid.isotope({
		itemSelector: '.card',
			percentPosition: true,
		 	masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.col-md-3'
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
            



