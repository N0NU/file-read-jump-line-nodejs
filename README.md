# Node.js File reading app
Its an simple Node.js app where I read data from file and perform some operations on the data

## How to use
- Use `npm install` to install dependencies
- Use `node code.js` to run the application

## Explanation
The file consist of three operations ((acc, jmp, or nop). Each operation has some number assigned to it e.g. acc +1, acc -1, jmp -1 etc. 
jmp means to jump at a certain line in the file for example jmp +5 you will have to move ahead 5 lines and start operations there. acc increases or decreases a single global variable called the accumulator by the value given in the argument. For example, acc +7 would increase the accumulator by 7. The accumulator starts at 0. After an acc instruction, the instruction immediately below it is executed next.
nop stands for No Operation - it does nothing. The instruction immediately below it is executed next.
For example, consider the following program:

nop +0<br>
acc +1<br>
jmp +4<br>
acc +3<br>
jmp -3<br>
acc -99<br>
acc +1<br>
jmp -4<br>
acc +6<br>

These instructions are visited in this order:
nop +0  | 1<br>
acc +1  | 2, 8(!)<br>
jmp +4  | 3<br>
acc +3  | 6<br>
jmp -3  | 7<br>
acc -99 |<br>
acc +1  | 4<br>
jmp -4  | 5<br>
acc +6  |<br>

The code will print the acc value just before the instructions repeat themselves and will stop.
