


const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c;
    }
}
// obj to JSON
console.log(JSON.stringify(obj));

// JSON to obj
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));


