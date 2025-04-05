// 1. global execution -> this , it can also be deleted after done
// 2. memory phase
//    assign values 
//    func def
//    results   
// 3.execution phase    vedio 25
 

// falsy values = false,0,-0, BigInt On,"", null, undefined, NaN
// truthy values = "0", 'false' , " (space)", {}, [], function(){}


//  Nullish Coalescing operator (??): null undefined
let val1;
val1=5?? 10 //5
//val1= null ??10 //10
// val1= undefined ??15 //15
// val1= null ?? 10?? 20 //10


console.log(val1);


// ternary operator
 // condition ? true : false

 //ITERATIONS 
 //01
 //FOR LOOP
//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//  }ver common like java only



//break and continue : like we use after a conction in the loop using if an then if these key words are wirttern same thing happens according to thei purpose
let index=0
while(index<=10){
    // console.log(`value of index ${index}`);
    index=index+1
    
}
let myArray=['flash','batman','superman']
let arr=0
while(arr<myArray.length){
    // console.log(`val is ${myArray[arr]}`);
    arr=arr+1
    
}
let score=1
do{
// console.log(`score is ${score}`);
score++

}while(score<=10);


//ARRAY SPECIFIC LOOPS
// for of

const ar= [1,2,3,4,5]
for(const num of  ar){
    // console.log(num);
    
}

const greetings ="hello world!"
for (const greet of greetings){
    // console.log(`each char is ${greet}`);
    
}


//maps

const map = new Map() 
map.set ('d',"'drithika'")
map.set ('de',"'devika'")

map.set ('m',"'minakshi'")
map.set ('b',"'birupakshya'")
console.log(map);

for( const [key, value] of map)
{
    console.log(key, '-',value);
    
}

const myObject={
    'game1':'nfs',
    'game':'hshs'
}

//fof of nhi chalta object m

//for in loop lagta h
 for (const r in myObject){
    // console.log(myObject[r]);
    
 }

