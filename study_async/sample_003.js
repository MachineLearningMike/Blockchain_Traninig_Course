function double(value) {
    setTimeout( () => setTimeout(console.log, 0, value * 2), 1000);
}
double(3);
/*
6 (printed after roughly 1000 ms)

The following funciton is added to the EL (event loop) after 1000ms:
() => setTimeout(console.log, 0, value * 2) ---------- fun.1

Look, this function, when calld, calls another setTimeout(.),
arranging the following function to be added to the EL:
() => console(value * 2) ----------------------------- fun.2

Question:
- When is fun.1 called?
- When is fun.2 called?
- What does the starting thread do while setTime(.) is waiting time elaps?

The starting thred walk through the code like this:
1. It gets to know that double(.) is defined as the code shows.
2. It calls, or evaluates, the statement double(3), walking into the double(.) code.


*/