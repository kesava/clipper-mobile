PassStore = Backbone.Collection.extend({
	model: Pass,
	localStorage: new window.Store("passesDB"),
	addPass: function(pass){
		if (pass.name == 'Cash Value') {
			cash_bal = this.find(function(pass) { return (pass.get("name") == "Cash Value") });
			cash_bal.save({price: cash_bal.get("price") + pass.price});
		} else {
			passes.create(pass);			
		}
		
		flashes.addMsg({msg: pass.name + " has been added.");
		transitPass.views.clipperview.render();
		
	}
});

var passes = new PassStore;
if (localStorage.getItem("passesDB") == null) {
	passes.create({name: "Cash Value", price: 0}, {silent: true});
}
