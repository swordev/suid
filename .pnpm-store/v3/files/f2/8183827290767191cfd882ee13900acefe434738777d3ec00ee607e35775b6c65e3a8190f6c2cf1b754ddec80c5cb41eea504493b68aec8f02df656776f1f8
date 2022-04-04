var RJFormat = (function() {

	/*********************
	 * PRIVATE
	 *********************/

	/** The string to use if the raw value is not valid. */
	var invalidValueStandin = "--";

	/** Returns true if the given value is not null or undefined. */
	var isValue = function(val) {
		return val !== undefined && val !== null;
	};

	/** Generates a function that calls a formatter function if the given value is valid, otherwise returns the invalidValueStandin. */
	var validOr = function(f) {
		return function(val) {
			return isValue(val) ? f(val) : invalidValueStandin;
		};
	};

	/*********************
	 * PUBLIC
	 *********************/

	/** Mark thousands with commas. 4000000 -> 4,000,000. */
	var commatize = function(val) {
		var valString = val.toString();
		var output = [];
		for(var i=valString.length-1; i>=0; i--) {
			var fromRight = valString.length - i - 1;
			if(fromRight !== 0 && fromRight%3 === 0) {
				output.unshift(",");
			}
			output.unshift(valString[i]);
		}
		return output.join("");
	};

	/** Formats the given value as a percentage. Returns the invalidValueStandin if the given raw value is null or undefined. */
	var percentage = validOr(function(val) {
		return val * 100 + "%";
	});

	var currency = validOr(function(val) {

		var valString = val.toString();
		var decimelLoc = valString.indexOf(".");
		var decimelPlaces = decimelLoc === -1 ? 0 :
			valString.length - valString.indexOf(".") - 1;

		var mixed = valString.split(".");
		var whole = mixed[0];
		var fraction = mixed.length > 1 ? mixed[1].substring(0,2) : "";

		return "${0}.{1}".supplant(
			commatize(whole),
			fraction + "0".repeat(2 - fraction.length)
		);
	});

	// public interface
	return {
		commatize: commatize,
		currency: currency,
		percentage: percentage
	};
})();
