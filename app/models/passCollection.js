PassStore = Backbone.Collection.extend({
	model: Pass,
	storeName: "passesDB"
});

var passes = new PassStore;

passes.bind('add', function() {
	transitPass.views.clipperview.render();
});