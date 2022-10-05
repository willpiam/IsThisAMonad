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
        return new Maybe(value);
    }
}
let firestFriendGender = new Maybe("William")
    .bind(s => s.toUpperCase())
    .bind(s => s.split("").reverse().join(""))
    .bind(s => s + "!");
console.log(firestFriendGender.value);
