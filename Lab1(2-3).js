'use strict'

/*let counter = 0;
const array = [ 10, -59, 3, 0 ,-7, 8, 9, -45, 14];
const sum = (acc, val) => (counter++, console.log(counter, acc, val), acc + val);
const result =  array.reduce(sum);
console.log({ result, counter});*/

const a = 10;

function inc1(a) {
    return 10 + a;

}

function inc2(object2) {
    return object2 + 10;
}

const object1 = {
    n:5,
    m:10,
}


console.log(inc1(10));
console.dir({'Increment(object.n)': inc2(object1.n)});
console.dir({'Increment(object.m)': inc2(object1.m)});