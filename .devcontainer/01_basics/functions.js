//  function addTwoNumbers (n1,n2){
//      console.log(   n1+n2 );
     
//      |}

//      addTwoNumbers(2,3)  //gives the sum, if data types are diff then diff results come 
//      //args=2,3 

function addTwoNumbers (n1,n2){
    console.log(   n1+n2 );
    return n1+n2 //directly returns 
    //nothing gets printed after resturn
    
    }
    const result= addTwoNumbers(3,5)
    console.log("result=", result);

    function username (name)
    {
        if(name===undefined){ //!username
            console.log("please enter a username");
            return

        }
        return `${name} just logged in `
      
    }

    //console.log(username("drithika"))
    //if no value was passed then it will shoe " undefined just logged in"
     console.log(username());


     function calculatecarprice(...num1){
        return num1
     }
     console.log(calculatecarprice(200,300,400));
     // gives an array of num1

 const usaar ={
    username1:"drithika",
    price:3333

     }
     function handleobject(anyobject){
        console.log(`username is ${anyobject.username1} and price ${anyobject.price}`);
        
     }
     handleobject(usaar)

     const mynewarray= [200,300,400]
function returnsecvalue(getArray){
    return getArray[1]
}
console.log(returnsecvalue(mynewarray));
