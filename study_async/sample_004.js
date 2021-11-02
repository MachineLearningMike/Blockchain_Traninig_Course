function double(value) {
    setTimeout( () => console.log(value * 2), 1000);
    console.log('Hello.')
}
double(3);
/*
'Hello' is printed immediately.
6 (printed after roughly 1000 ms)

This means JS does NOT wait until the arranged function finishes.

Take over:
It arranges the event loop to call a function on an event,
then continues execution to evaluate the next statement.
*/