"use strict";
//  CRASH COURSE 3
function swapdIdtype(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapdIdtype(1);
const idTwo = swapdIdtype('2');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
    }
}
