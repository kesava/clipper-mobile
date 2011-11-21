PassStore = Backbone.Collection.extend({
	model: Pass,
	storeName: "passesDB"
});

var passes = new PassStore;