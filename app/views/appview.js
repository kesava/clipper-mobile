AppView = Backbone.View.extend({
    initialize: function(){
    },
    events: {
        "submit form.buyform": "buyPass"
    },
    
	buyPass: function(event){
		var transitagency = event.target.id;
		var pass = {name: $('.buyform input[name=' + transitagency + ']:checked').data('name'), price: $('.buyform input[name=' + transitagency + ']:checked').data('price')};
		$('#transitservices').trigger('collapse');
		$.mobile.changePage( "#mainpage", { transition: "flip"} );
		passes.add(pass);
		return false;
	}
});