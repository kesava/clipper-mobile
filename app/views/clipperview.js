ClipperView = Backbone.View.extend({
	el: $('#mypasses'),
    initialize: function(){
		console.log("World");
		
    },
	render: function() {
		var transpasses = JSON.stringify(passes);
		console.log({passes : transpasses});
		var list = "<% _.each(passes_arr, function(pass) { %> <li><strong><%= pass.name %></strong>: <%= pass.price %> </li> <% }); %>";
		console.log(list);
		$(this.el).html(_.template(list, {passes_arr : transpasses}));
		return this;
	}
});