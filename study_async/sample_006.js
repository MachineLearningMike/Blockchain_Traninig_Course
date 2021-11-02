function double(value) {
    setTimeout( () => console.log(value * 2), 0);
    console.log('Hello 2.')
}

function triple(value) {
    setTimeout( () => console.log(value * 3), 0);
    console.log('Hello 3.')
}


double(3);
triple(4);

/*
prints in the following order:
Hello 2
Hello 3
6, 
12

Take over !!!
The sync thread DOES go to the last and dies.
Only then the even loop takes action to trigger the arranged functions.
A thread that performs an arranged functions is called an asynchronous thread.

Take over !!!
So, a sync thread walk through the whole code first,
then async threads are launched by the event loop to walk through arranged functions.

Take over !!!
An async thread, too, can arrange the loop to call a function on an event.
So arrangements are nested, producing a tree structure of arrangements.
Each arrangement will launch a thread, and there will be a competition among async threads.

Take over !!!
Async programming tech is all about managing the competition.

*/