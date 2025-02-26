let mydate= new Date()
console.log(mydate.toISOString());
console.log(mydate.toString());
console.log(mydate.toLocaleString());
//type of date is object

//todeclare a specific date

let thedate= new Date(2024,0,23)
console.log(thedate.toDateString());

//compare timestamps

let mytimestamp= Date.now()
console.log(mytimestamp)
console.log(thedate.getTime())


//t cnvt t into seconds

console.log (Math.floor(Date.now()/1000));

