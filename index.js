"use strict";
class Maybe {
    constructor(value) {
        this.value = value;
    }
    bind(fn) {
        if (this.value === null) {
            return this;
        }
        const value = fn(this.value);
        // return new Maybe(value)
        return value;
    }
}
let firestFriendGender = new Maybe("William")
    .bind(s => new Maybe(s.toUpperCase()))
    .bind(s => new Maybe(s.split("").reverse().join("")))
    .bind(s => new Maybe(s + "!"));
console.log(firestFriendGender.value);
