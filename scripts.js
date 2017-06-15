$(function() {
	$('#navbar').affix({
		offset: {
			top: 200
		}
	});

	$('#easyPaginate').easyPaginate({
		paginateElement: 'img',
		elementsPerPage: 3,
		effect: 'climb'
	});
});
