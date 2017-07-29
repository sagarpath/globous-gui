const $= require('jQuery');

const categories=['image','video']

function category(division){
	categories.forEach(function(item){
		console.log(item)
		$('#'+item).css('display','none');
		$('#'+item+'select').removeClass('active');
		console.log('#'+item+'select')

	})
	$('#'+division).css('display','');
	$('#'+division+'select').addClass('active');
}