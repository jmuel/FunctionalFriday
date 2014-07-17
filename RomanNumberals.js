var _ = require("underscore");

var numeralMapHighToLow = {
	"M" : 1000,
	"D" : 500,
	"C" : 100,
	"L" : 50,
	"X" : 10,
	"V" : 5,
	"I" : 1
};

var convertToRomanNumerals = function(number, numeralString) {
	if (number == 0) return numeralString;
	var newNumeral = findNumeral(number, numeralMapHighToLow);

	return convertToRomanNumerals(number - numeralMapHighToLow[newNumeral], numeralString + newNumeral)
};

var convertFromRomanNumerals = function(numeralString, number) {
	if(!numeralString) return number;
	var step = convertOneStepFromRomanNumerals(numeralString);
	return convertFromRomanNumerals(numeralString.substring(step.charactersToRemove), number + step.value);

};

var convertOneStepFromRomanNumerals = function (numeralString ) {
	var charactersToRemove = 1
	var val = numeralMapHighToLow[numeralString.charAt(0)];
	if(numeralString.length > 1) {
		var secondVal = numeralMapHighToLow[numeralString.charAt(1)];
		if(val < secondVal) {
			val = secondVal - val;
			charactersToRemove = 2
		} 
	}
	return {value: val, charactersToRemove: charactersToRemove};
}

var findNumeral = function(number, numeralMap) {
	var key 

	_.find(numeralMap, function(value, numeral) {
		if (value <= number) {
			key = numeral;
			return true;
		}
		else {
			return false;
		}
	})
	return key
}




console.log(convertToRomanNumerals(666, ""));

console.log(convertFromRomanNumerals("DCLIV", 0));