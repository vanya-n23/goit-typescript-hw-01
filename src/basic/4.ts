const greet = (): string => {
  return "Hello, world!";
}

console.log(greet);

// --- 

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calc);

// ---

function customError(massage: string): never {
  throw new Error(massage);
}

console.log(customError);

// function showMessage(message) { console.log(message);
// }

// function calc(num1, num2) {
// return num1 + num2;
// }

// function customError() {
// throw new Error('Error');
// }
