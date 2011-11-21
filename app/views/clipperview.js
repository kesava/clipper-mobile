ClipperView = Backbone.View.extend({
	el: $('#mypasses'),
    initialize: function(){
		console.log("World");
		
    },
	render: function() {
		console.log(passes.toJSON());
	  $(this.el).html(passes.toJSON());
	  return this;
	}
});