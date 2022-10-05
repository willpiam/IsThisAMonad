class Maybe<A> {
    value: A | null;

    constructor(value: A) {
        this.value = value;
    }

    bind(fn: (arg0: A) => Maybe<A>): Maybe<A> {
        if (this.value === null) {
            return this
        }
        const value = fn(this.value);
        return value
    }
}

let firestFriendGender = new Maybe("William")
    .bind(s => new Maybe(s.toUpperCase()))
    .bind(s => new Maybe(s.split("").reverse().join("")))
    .bind(s => new Maybe(s + "!"))

console.log(firestFriendGender.value)

