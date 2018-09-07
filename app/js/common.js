$(document).ready(function () {

	function checkForChanges()
	{
		if ($('#second').hasClass('active')){
			$('.carousel-watch li').css('color','black');
		}
		else
			setTimeout(checkForChanges, 500);
		if ($('#first').hasClass('active')){
			$('.carousel-watch li').css('color','white');
		}
		else
			setTimeout(checkForChanges, 500);
	}
	$(checkForChanges);

});