/*
We learned:

The thread that walk through the code first time, is called the sync thread.

The sync thread, walking through, evaluates statements.
Some of the statements, when evaluated, arranges the event loop to call a function on an event.
Others simply finish immediately, you know, leaving an effect to the env and returning a value.

After the sync thread finishes walking throuhout the whole code,
the event loop takes actions to call arranged functions on their respective events, 
launching a thread for each arranged function.
A thread that walks through an arranged function, is called an asyn thread.

An async thread behaves, inside the code of the arranged function that it is assigned, 
just like the sync thread did inside the whole code,

maybe making new, nested, arrangements.

So, the event loop will have multiple arranged functions to call on their respective events.

*/