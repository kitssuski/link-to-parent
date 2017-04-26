function linkToParent(i){
	$(i).each(function(index, el) {
		$(el).css('cursor', 'pointer').click(function(e) {
			 $( location ).attr("href", $(el).find('a').attr('href'));
		}).bind('contextmenu', function(e) {
			e.preventDefault();
			customClick(this, e);
		});
	});
}
function customClick(i, e){
	// console.log(e);
	switch(e.button) {
	  case 1:
	  console.log('Middle click');
	  break;

	  case 2:
 	  console.log(this);
	  break;

	  default:
	  console.log('Click or Left click');
	  break;
	}

}