A calculator with basic functions that I created without instructions.

This is the final project of The Odin Project's foundation course.
Eveything that went into making was done entirely using my own abilities.

The calculator is currently barebones; it meets the requirements and does not exceed them. Some extra credit points are given for:

 - adding decimal support
 - adding CSS
 - add a backspace option
 - add keyboard support

If I revisit this project I will do these, as this is the last project on the foundation course, I am keen to move on to learn more.

I used the 'State' design pattern as practice, since I am learning about design patterns at the moment long-side the Odin Project. This was not necessary, but it did make the logic and code much easier to work with, and was a good learning experience.

Each state takes the form of a function. To switch the state, the program calls the function corrsponding to the desired state and passes in all relevant values. To perfom an action with a result that chagnes depending on the state, the program calls the current states version of that action, meaning the underlying operation of the program does not depend on what states there are, and more states could be added if there were a need.