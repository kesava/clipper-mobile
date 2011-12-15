ClipperView = Backbone.View.extend({
	el: $('#mypasses'),
    initialize: function(){
		passes.fetch();
		this.render();
    },
	render: function() {
		var htmlstr = "<p>The following services have been loaded on your clipper card.</p><ul data-role='listview' data-inset='false' data-theme='d' data-divider-theme='e' class='ui-listview'>";
		var flashstr = "<div id='flash'>"
		
		_.each(flashes.toJSON(), function(flash) { flashstr += "<div class='flash'>" + flash.msg + "</div>"});
		_.each(passes.toJSON(), function(pass) { htmlstr += "<li class='ui-li ui-li-static ui-body-d'>" + "<p class='ui-li-aside ui-li-desc'><strong>$" + pass.price + "</strong></p><p class='ui-li-desc'><strong>" + pass.name + "</strong></p></li>";})
		
		htmlstr += '</ul>';
		flashstr += '</div>';
		$(this.el).html(flashstr + htmlstr);
		
		if (flashes.size() > 0) {
			$('#flash').show();
		
			$("#flash").fadeOut(15000, function() {
				        $(this).remove();
			});
		}
	
		return this;
	}
});



