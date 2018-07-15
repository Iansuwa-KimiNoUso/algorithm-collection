let prev = 0;
let start = 1;
let count = 20;
let fibonacci = [];

fibonacci.push(prev);
fibonacci.push(start);
for (let i = 0; i < count; i++) {
    sum = prev + start;
    fibonacci.push(sum);
    prev = start;
    start = sum;
}
console.log(fibonacci);