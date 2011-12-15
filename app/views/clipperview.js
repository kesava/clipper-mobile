ClipperView = Backbone.View.extend({
	el: $('#mypasses'),
    initialize: function(){
		passes.fetch();
		this.render();
    },
	render: function() {
		var htmlstr = '';
		var flashstr = '';
		_.each(flashes.toJSON(), function(flash) { flashstr += "<div class='flash'>" + flash.msg + "</div>"});
		_.each(passes.toJSON(), function(pass) { htmlstr += "<div class='pass_row'><ul class='multiple_columns'><li class='pass'>" + pass.name + "</li><li class='price'>$" + pass.price + "</li></ul></div>";})
		$(this.el).html(flashstr + htmlstr);
		return this;
	}
});