function double(value) {
    setTimeout( () => console.log(value * 2), 0);
    console.log('Hello.')
}
double(3);
/*
Look the event that will trigger the arranged funciton is alredy ready when placing the arrangement.
I mean the time laps is set to 0.
We expect '6' is printed before 'Hello', but 'Hello' is printed immediately, before 6.

Take over:
The arranged function is NOT triggered at arrangement time, even though the event has already happened.
The next statements will be performed first.

Take over !!!
The execution thread that walk through:
- performaning the arrangement: setTimeout( () => console.log(value * 2), 0)
- performing console.log('Hello.')
is called the synchronous thread.
*/