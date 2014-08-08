/**
	occursIn x xs
	allOccursIn xs xs
	sameElements xs xs
	numOccurences x xs
**/

var _ = require('underscore');

//not for binary search trees
var occursIn = function(elem, treeNode) {
	if(treeNode.content === elem) return true;

	return _.reduce(treeNode.children, function(memo, child) {
		if(occursIn(elem, child)) memo = true; return memo; }, false
	); 
}

var allOccursIn = function(list, treeNode) {

	return _.reduce(list, function(memo, item) {
		if(!occursIn(item, treeNode)) memo = false; return memo; }, true
	);
};

var sameElements = function(list, treeNode) {
	var flattenedTree = flattenTree(treeNode);

	var remainder = _.reduce(list, function(memo, item) {
		if(memo === false) return false;
		var clonedMemo = memo.slice(0);
		var itemToRemove = _.lastIndexOf(clonedMemo, item);
		if(itemToRemove === -1) return false;
		clonedMemo.splice(itemToRemove, 1);
		return clonedMemo;
	}, flattenedTree);

	return remainder.length == 0 && remainder !== false;

};

var numOccurences = function(elem, treeNode) {
	return _.reduce(treeNode.children, function(memo, child) {
		return memo + numOccurences(elem, child);
	}, elem === treeNode.content ? 1 : 0)
};

var flattenTree = function(treeNode) {
	return _.reduce(treeNode.children, function(memo, item) 
		{return memo.concat(flattenTree(item));}, [treeNode.content] 
	);
};



var exampleTree = 
	{
		content: 1,
		children: 
			[
				{content:2, children: []},
				{content:4, children: [{content:5}]},
				{content:1, children: [{content: 1}]}
			]
					
	};

console.log(occursIn(5, exampleTree));

console.log(allOccursIn([1,2], exampleTree));

console.log(allOccursIn([1,2,3], exampleTree));

console.log(flattenTree(exampleTree));

console.log(sameElements([1,2,4,5], exampleTree));

console.log(sameElements([4,5], exampleTree));

console.log(numOccurences(1, exampleTree));

