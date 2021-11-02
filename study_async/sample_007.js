function double(value) {
    setTimeout( () => console.log(value * 2), 0);
    console.log('Hello 2.')
}

function triple(value) {
    setTimeout(
        function() {
            setTimeout( () => console.log('Hello, I am nested in tripple.'),  0)
            console.log(value * 3);
        },
        0);
    console.log('Hello 3.')
}


double(3);
triple(4);

/*
prints in the following order:
Hello 2
Hello 3
6, 
12,
Hello, I am nested in tripple

Try to change the time laps parameters in setTime(.) finctons.

Take over !!!
An async thread, too, can arrange the loop to call a function on an event, during its walk/run.
So arrangements are nested, producing a tree structure of arrangements.
Each arrangement will launch a thread, and there will be a competition among async threads.

Take over !!!
Async programming tech is all about managing the competition.

*/