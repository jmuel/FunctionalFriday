var hanoi = function(num, a, b, c) {
    if(num > 1) hanoi(num-1, a, c, b);
    console.log("move the top disk from ", a, " to ", b);
    if(num > 1) hanoi(num-1, c, b, a);
}

var solveHanoi = function(num, a, b, c) {
    a = typeof a !== 'undefined' ? a : 1;
    b = typeof b !== 'undefined' ? b : 2;
    c = typeof c !== 'undefined' ? c : 3;

    return hanoi(num, a, b, c);
}

solveHanoi(3, "A", "C", "B")