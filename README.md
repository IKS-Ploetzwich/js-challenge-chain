# js-challenge-chain

This is a rather entertaining challenge I stumbled upon while browsing [Dev.to](https://dev.to).
Basically it asks you for a way to acomplish the following behavior:
```javascript
foo = chain('h')
bar = foo('e')('l')('l')('o')
foo.toString()            ==>  "h"
bar.toString()             ==>  "hello"
bar.ancestor.toString()     ==> "hell"
```

You'll find my solution in the index.js
If you wanna solve this yourself, don't spoil yourself by looking it up before solving it.
I also implemented some comments trying to explain what exactly I try to acomplish with my code.
I'm sure my implementation is not the most sophisticated, but it sure was fun coming up with it.

Happy coding!
