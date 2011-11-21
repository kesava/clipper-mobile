AppView = Backbone.View.extend({
	el: $('#actran'),
    initialize: function(){
		console.log("Hello");
    },
    events: {
        "submit #buyform": "buyPass"
    },
    
	buyPass: function(){
		var pass = {name: $('#buyform input[name=actransit]:checked').data('name'), price: $('#buyform input[name=actransit]:checked').data('price')};
		console.log(pass);
		passes.add(pass);
		$.mobile.changePage( "#mainpage", { transition: "flip"} );
		$("#transitservices").toggleClass('ui-collapsible-collapsed');
		return false;
	}
});