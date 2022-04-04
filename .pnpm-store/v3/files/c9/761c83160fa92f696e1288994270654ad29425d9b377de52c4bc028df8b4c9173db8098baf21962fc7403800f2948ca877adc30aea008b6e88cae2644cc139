/** Other functional functions I'm playing around with */

/** Returns a function with a clean prototype that calls the base function. */
Function.prototype.copy = function() {
	var f = this;
	return function() {
		return f.apply(this, arguments);
	}
}

/** Returns a constructor that will take an object as an initializer list. */
function initializer() {
	return function(members) {
		for(key in members) {
			this[key] = members[key];
		}
	}
}

/** Returns a constructor that will take an object as an initializer list. Takes
		an object of properties that are added to the constructor's prototype. */
function protoInitializer(protoMembers) {
	var construct = initializer();
	for(key in protoMembers) {
		construct.prototype[key] = protoMembers[key];
	}
	return construct;
}
