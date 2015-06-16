	// init Isotope
	var $grid = $('.grid').isotope({
	});


$(function() {


	$grid.isotope({
		itemSelector: '.card',
			percentPosition: true,
		 	masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.col-md-3'
		  }
	})

			// filtres isotopes sur les boutons
	$('.btn-tag').click(function(event) {
		if ($(this).hasClass( "tag-id-all" )) {
			$grid.isotope({ filter: '*' });
		}
		if ($(this).attr( "data-tag-id")) {
			$grid.isotope({ filter: '.tag-id-' + $(this).attr( "data-tag-id") });
		}
	});

			// ouvre page dans le modal
		$('.btn-page').click(function(event) {
			if ($(this).attr( "data-dest-url")) {
				var destUrl = $(this).attr( "data-dest-url");
				$('.card').fadeOut( function(){

					$('.modal-body').load(destUrl, function(){
						
					});
					
					$('.modal-page').modal('show');	
				});

				
		}

	});

			// décharge page dans le modal
			$('.modal-page').on('hidden.bs.modal', function (e) {
			  // do something...


		
			$('.card').fadeIn( function(){
					$('.modal-body').html('');
					$grid.isotope({ filter: '*' });
			});


	
			})

			/* ferme modal
		$('.btn-home').click(function(event) {
				$('#page').modal('hide');

	});

*/
});
            



