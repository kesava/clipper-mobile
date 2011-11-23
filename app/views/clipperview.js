ClipperView = Backbone.View.extend({
	el: $('#mypasses'),
    initialize: function(){
			this.render();
    },
	render: function() {
		var htmlstr = '';
		_.each(passes.toJSON(), function(pass) { console.log(pass); htmlstr += "<li><strong>" + pass.name + "</strong>: $" + pass.price + "</li>";})
		$(this.el).html(htmlstr);
		return this;
	}
});