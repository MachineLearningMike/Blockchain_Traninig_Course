function double(value) {
    setTimeout( function() {console.log(value * 2) }, 1000);
}
double(3);

/*
6 (printed after roughly 1000 ms)

So, what does the funciton double(...)?
It performs setTimeout(...) first, which in turn arranges the event loop to "trigger the following function 
after 1000 miliseconds":

function() { console.log(value * 2); } --------- A time laps of 1000 will trigger this funciton.

This function can be written: () => console.log(value * 2).
Hence the double(.) code:

function double(value) {
    setTimeout( () =>console.log(value * 2), 1000);
}

Take over:
setTimeout( () =>console.log(value * 2), 1000) means setTimeout( function() { console... }, 1000).
setTimer(.) arranges the event loop to call a function after x miliseconds.
We can saty the funciton is triggered on a time laps event.
Imagine triggering on some other events.

*/