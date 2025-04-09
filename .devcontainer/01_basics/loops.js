// 1. Global Execution Context -> this (global object in browser), can also be deleted after done
// 2. Memory Phase -> Variables and function declarations are hoisted (memory allocated)
// 3. Execution Phase -> Code runs line-by-line (Video 25)

// Falsy values in JS: false, 0, -0, BigInt(0n), "", null, undefined, NaN
// Truthy values: "0", 'false', " " (space), {}, [], function(){}

// Nullish Coalescing Operator (??): Only checks for null or undefined (not falsy in general)
let val1;
val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15; // 15
// val1 = null ?? 10 ?? 20; // 10 — only the first non-null/undefined value is used

console.log(val1);

// Ternary operator: condition ? true : false

// ITERATIONS
// 01 — FOR LOOP
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
// Very common, similar to Java

// Break and Continue — to skip or stop the loop based on condition

let index = 0;
while (index <= 10) {
    // console.log(`Value of index: ${index}`);
    index = index + 1;
}

let myArray = ['flash', 'batman', 'superman'];
let arr = 0;
while (arr < myArray.length) {
    // console.log(`Val is: ${myArray[arr]}`);
    arr = arr + 1;
}

let score = 1;
do {
    // console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

// ARRAY SPECIFIC LOOPS
// for...of loop — best for arrays
const ar = [1, 2, 3, 4, 5];
for (const num of ar) {
    // console.log(num);
}

const greetings = "hello world!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// MAPS — maintain order and keys can be of any type
const shorvut = new Map([
    ['d', 'drithika'],
    ['de', 'devika'],
    ['m', 'minakshi'],
    ['b', 'birupakshya']
]);

console.log(shorvut.size);
console.log(shorvut);

for (const [key, value] of shorvut) {
    console.log(`${key} - '${value}'`);
    console.log(`${key} shorvut is for ${value}`);
}

// OBJECTS
const myObject = {
    'game1': 'nfs',
    'game2': 'hshs'
};

// for...of doesn’t work directly on objects — use for...in
for (const r in myObject) {
    console.log(`${r} shorvut is for ${myObject[r]}`);
}

// forEach — modern array iteration (callback function)
const prog = ["js", "rb", "py", "java"];

// prog.forEach(function (item) {
//     console.log(item);
// });

prog.forEach((item, index, arr)=> {//inside is basic call back funtion name is not needed

    console.log(item, index, arr);
    
})
 //another way 
//  function printMe(item){
//     console.log(item);
    
//  }
//  prog.forEach(printMe)


const mycoding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },{
        languageName: "java",
        languageFileName: "j"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languageName);
    
})

const myNums= [1,2,3,4,5,6,7,8,9,10]
const newnums=myNums.filter((num)=> {
    return num>4 //if i open scope i need to write return keyword
})


console.log(newnums);

// filter keyword is used to as so its name
 
// const newnumss = myNums.map((num)=>{
//     return num+10
// })

//chaining
const newnumss= myNums
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=> num>=40)
console.log(newnumss);

//reduce
const suminitialvalu= myNums.reduce(function(acc,currval){
   console.log(`acc: ${acc} and currval: ${currval}`);
   
    return acc +currval
},0)
console.log(suminitialvalu);

// DOM- DOOCUMENT OBJECT MODEL