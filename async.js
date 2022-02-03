function add(a, b) {
    const result = a + b;
    return result;
}

const x = 10;
const y = 22;
// const r = setTimeout(add, 2000, x, y);
setTimeout(() => {
    const result = add(x, y);
    console.log(result);
}, 1000);
