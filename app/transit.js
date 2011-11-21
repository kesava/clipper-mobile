(function($){

	Pass = Backbone.Model.extend({});
	
	PassStore = Backbone.Collection.extend({
		model: Pass,
		storeName: "passesDB"
	});

	var passes = new PassStore;

	PassView = Backbone.View.extend({
		el: $('#actran'),
		initialize: function(){
			console.log(this.el);
			_.bindAll(this, 'buyPass');
		},
		events: {
            "submit #buyform": "buyPass"
        },
		buyPass: function(){
			var pass = {name: $('.buyform input[name=actransit]:checked').data('name'), price: $('.buyform input[name=actransit]:checked').data('price')};
			console.log(pass);
			passes.add(pass);
			$.mobile.changePage( "#mainpage", { transition: "flip"} );
			return false;
		}// ,
		// 		render: function() {
		// 			var data = passes.map(function(pass){return "<strong>" + pass.get('name') + "</strong>: " + pass.get('price') + "\n" });
		// 			$('#mypasses').html(data);
		// 			return this;
		// 		}
	});
	
	passes.bind('add', function() {
		console.log(passes);
	//	passes.fetch({success: function(){view.render();}});
	});
	
	var view = new PassView;

})(jQuery);