function double(value) {
    setTimeout( function() {console.log(value * 2) }, 1000);
}
double(3);

/*
6 (printed after roughly 1000 ms)

What happens when this code is executed by the system?

1. A thread is PREDICTABLY launched by the system to walk through this code.
2. It gets to know about the double(.) funciton.
3. It calls double(3), walking into the double(.) function.
4. It calls setTimeout(func, 100), walking into the code of setTime(.).
5. It, as instructed by setTime(.) code, arranges the system 
    to add the "fun" function to the queue of the Event Loop (EL) after 1000ms is elapsed.
6. It, then and soon, returns and finds there is nothing else to do.
7. It returns to where it came from.
8. Meanwhile, the system, after 1000 ms, add the "func" function to the EL queue.
9. The EL thread finish what it was walking through.
10. The EL thread, then, finds the "func" function in the queue.
11. The EL thread starts to walk through the code of the "func" function.
12. Note: It's UNPREDICTABLE when the EL thread is free, finds the "func" function, and start.


The first thread is called the synchronous thread, BECAUSE ITS LAUNCH WAS PREDICTABLE.

Take over:
- Synchronous = Predictabe | Planned | Scheduled
- setTimer(.) arranges the function, given as an argument, to be added to the EL after x miliseconds.
- The EL is a single thread, together with its queue, walking through queued functions one by one.

*/