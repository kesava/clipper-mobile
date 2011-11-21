AppView = Backbone.View.extend({
	el: $('#actran'),
    initialize: function(){
    },
    events: {
        "submit form.buyform": "buyPass"
    },
    
	buyPass: function(){
		var pass = {name: $('.buyform input[name=actransit]:checked').data('name'), price: $('.buyform input[name=actransit]:checked').data('price')};
		$.mobile.changePage( "#mainpage", { transition: "flip"} );
		passes.add(pass);
		return false;
	}
});