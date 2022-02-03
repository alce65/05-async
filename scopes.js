function add(a, b) {
    console.log(x);
    const result = a + b;
    return result;
}
const x = 1;
const y = 2;
setTimeout(() => {
    console.log('Fin', x, y);
}, 1000);
console.log('Suma', add(x, y));

setTimeout(add, 2000, 23, 67);
