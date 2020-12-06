'use strict'

const array = [true, 'hello', 5, 12, -200, false, '5', false, 'word', true , new Object, 'Ukraine', true, -48, 4.54, false, 'use', 'car', 567586970, new Function, 'dog', true, '567', false, '556', 'animals', new Object, new Function];
let obj = {
    string: 0,
    number: 0,
    boolean: 0,
    function: 0,
    object: 0,
};


for(const value of array) {
    if(typeof value === 'string'){
        obj.string++;
    }
    else if(typeof value === 'number'){
        obj.number++;
    }
    else if(typeof value === 'boolean'){
        obj.boolean++;       
    }
    else if(typeof value === 'function'){
        obj.function++;
    }
    else obj.object++;

}
console.log(obj);