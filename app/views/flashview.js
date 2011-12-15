FlashView = Backbone.View.extend({
	el: $('#flash'),
    initialize: function(){
		flashes.fetch();
		// this.render();
    },
	render: function() {
		var flashstr = "";
		
		_.each(flashes.toJSON(), function(flash) { flashstr +=  flash.msg });
		
		$(this.el).html(flashstr);
		
		if (flashes.size() > 0) {
			$('#flash').show();
		
			$("#flash").fadeOut(15000, function() {
				        $(this).remove();
			});
		}
	
		return this;
	}
});