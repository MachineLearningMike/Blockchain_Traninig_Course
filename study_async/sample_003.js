function double(value) {
    setTimeout( () => setTimeout(console.log, 0, value * 2), 1000);
}
double(3);
/*
6 (printed after roughly 1000 ms)

We find arranged function:
() => setTimeout(console.log, 0, value * 2)

Look, the arranged function calls setTimeout(.) again, arranging another, nested, function:
() => console(value * 2)

Take over:
An arranged function can have a nested arranged function.
This is just a brain exercise.
*/