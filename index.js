function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
const num1 = 5;
const num2 = 3;

console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);

console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);

console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
