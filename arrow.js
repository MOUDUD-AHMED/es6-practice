//function doubleIt(num){
//    return num * 2;
//}

// const doubleIt = function(num){
//     return num * 2;
//}

const doubleIt = num => num * 2;
const add = (x, y) => (x + y);
const give = () => 100;
const math = (x, y) => {
    const sum = (x + y);
    const diff = (x - y);
    const result = sum * diff;
    return result;
}


const result = doubleIt(5);
const result1 = add(12, 10);
const result2 = give();
const result3 = math(10, 5);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);