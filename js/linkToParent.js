function linkToParent(i){
	$(i).each(function(index, el) {
		$(el).css('cursor', 'pointer').click(function(e) {
			 $( location ).attr("href", $(el).find('a').attr('href'));
		});
	});
}