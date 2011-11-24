ClipperView = Backbone.View.extend({
	el: $('#mypasses'),
    initialize: function(){
		passes.fetch();
		this.render();
    },
	render: function() {
		var htmlstr = '';
		_.each(passes.toJSON(), function(pass) { htmlstr += "<li><strong>" + pass.name + "</strong>: $" + pass.price + "</li>";})
		$(this.el).html(htmlstr);
		return this;
	}
});