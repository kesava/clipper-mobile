$(function(){
	Pass = Backbone.Model.extend({
		defaults: {
			title: '',
			month: '',
			price: ''
		},
		initialize: function(name, price) {
			this.set({title: name, price: price})
		},
		price: function() {
			this.get("price");
		}
	});

	TransitAgency = Backbone.Model.extend({
	    defaults: {
	        name: '',
	        passes: []
	    },
	    initialize: function(name){
	        this.set({name: name});
	    },
		addPass: function(pass){
			var passes_arr = this.get("passes");
			passes_arr.push(pass);
			this.set({passes: passes_arr});
		}
	});

	Person = Backbone.Model.extend({
		defaults: {
			passes: []
		},
		buyPass: function(newpass){
			var passes_arr = this.get('passes');
			if !(_.find(passes_arr, function(pass) {return ((pass.title == newpass.title) && (pass.month == newpass.month))})) {
				passes_arr.push(pass);
				this.set({passes: passes_arr});			
			}
		},
	});



});