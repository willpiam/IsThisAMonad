class Maybe<A> {
    value: A | null;

    constructor(value: A) {
        this.value = value;
    }

    bind(fn: (arg0: A) => A): Maybe<A> {
        if (this.value === null) {
            return this
        }
        const value = fn(this.value);
        return new Maybe(value)
    }
}

let firestFriendGender = new Maybe("William")
    .bind(s => s.toUpperCase())
    .bind(s => s.split("").reverse().join(""))
    .bind(s => s + "!")

console.log(firestFriendGender.value)

