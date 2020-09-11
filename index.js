function chain(value) {
    // We are going to return a function, with a custom 'this' reference.
    // We do this by invoking 'call' on our base method with a new object referencing
    // the current object as the ancestor of the new function call.
    const next = (nextValue) => chain.call({
        ancestor: this,
        // We define toString of the new this. This recursively get's the value
        // of it's ancestors until we reach the first function call.
        toString: () => this.ancestor ? this.toString() + value : value
    }, nextValue);
    // The toString method of the returned function also needs to be updated.
    next.toString = () => this.ancestor ? this.toString() + value : value;
    // At last we add the ancestor property to the retuned function, so we can reference it.
    next.ancestor = this;

    return next;
}

const foo = chain('h');
const bar = foo('e')('l')('l')('o')
console.log(foo.toString());                // ==>  "h"
console.log(bar.toString());                // ==>  "hello"
console.log(bar.ancestor.toString());       // ==> "hell"
