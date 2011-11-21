PassStore = Backbone.Collection.extend({
	model: Pass,
	storeName: "passesDB"
});

var passes = new PassStore;

passes.bind('add', function() {
	console.log(passes.length);
	transitPass.views.clipperview.render();
});