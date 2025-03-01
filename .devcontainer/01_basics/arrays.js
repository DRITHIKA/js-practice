const one=[2,3,4]
const heroes =[ 'trees', 'girls', 'flowers']
const neew=[...one,...heroes]// spread operator...
//joins two arraysS
console.log(neew)

//we can use concatenation 
//push , pull, shift unshift
  const anotherarray= [1,2,3,[4,5,6],7,[6,7,,[4,5]]]
   const real_another_array= anotherarray.flat(Infinity)
   console.log(real_another_array);


   //converts a string to array
   console.log(Array.from({name:"drithika"}))
   //gives empty arryay []

   console.log(Array.from("drithika"));

   

   let s1=200
   let s2=300
   let s3=400

   console.log(Array.of(s1,s2,s3)); //gives a new array from set of elemts
   
   