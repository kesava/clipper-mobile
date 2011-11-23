PassStore = Backbone.Collection.extend({
	model: Pass,
	localStorage: new Store("passesDB")
});

var passes = new PassStore;

passes.bind('add', function() {
	transitPass.views.clipperview.render();
});