Pass = Backbone.Model.extend({
	defaults: {
		name: '',
		price: ''
	},
	initialize: function(name, price) {
		this.set({name: name, price: price})
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

var 