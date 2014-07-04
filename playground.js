var mori = require('mori');

console.log(mori.conj(mori.list(1,2,3), [1,2,3]));

console.log(mori.subvec(mori.vector(1),0,1))

var a = mori.vector(1,2,3,4,5,6);
var b = mori.conj(mori.subvec(a,0,1), "blah", mori.subvec(a, 1, mori.count(a)));

console.log(b);
