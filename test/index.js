import Python, { compile } from "../";
/*
let a = Python(
    "a", `print 'hello'`
);
*/

let a = compile`import cv2 
x = 0
print("hello")`;

console.log(a);