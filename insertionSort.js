var _ = require('underscore');
var mori = require('mori');

var insertionSort = function(list) {
	return _.reduce(list, function(sortedList, currentElement) {
		return insertElementIntoSortedLocation(sortedList, currentElement, 0);
	}, mori.vector());
};

var insertElementIntoSortedLocation = function(list, element, current) {
	if(current > mori.count(list) -1) return mori.conj(list, element); 
	if(mori.nth(list, current) > element) return mori.into(mori.conj(mori.subvec(list, 0, current), element),
															mori.subvec(list, current, mori.count(list)));
	return insertElementIntoSortedLocation(list, element, current + 1);

};


console.log(insertionSort([2,1,4,3,7,6,5]));