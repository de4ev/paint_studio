$(function () {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo.svg" alt=""/>'
		}
	});

	var mmenuApi = $('#my-menu').data('mmenu');
	mmenuApi.bind("open:finish", function () {
		$('.hamburger').addClass("is-active");

	}).bind("close:finish", function () {
		$('.hamburger').removeClass("is-active");

	})
});
