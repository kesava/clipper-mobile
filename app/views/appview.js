AppView = Backbone.View.extend({
    initialize: function(){
    },
    events: {
        "submit form.buyform": "buyPass"
    },
    
	buyPass: function(event){
		var transitagency = event.target.id;
		if (transitagency == 'cash') {
			var pass = {name: 'Cash Value', price: $('#cash-value').val()};
		}
		else {			
			var pass = {name: $('.buyform input[name=' + transitagency + ']:checked').data('name'), price: $('.buyform input[name=' + transitagency + ']:checked').data('price')};
		}
		$('#transitservices').trigger('collapse');
		$.mobile.changePage( "#mainpage", { transition: "flip"} );
		$('#mypasses').animate({'backgroundColor' : '#ffffff'});
		passes.add(pass);
		return false;
	}
});