FlashStore = Backbone.Collection.extend({
	model: Flash,
	localStorage: new window.Store("flashesDB"),
	addMsg: function(msg) {
		flashes.reset();
		flashes.create(msg);
	}
});

var flashes = new FlashStore;
