//this keyword talks about the current funtion
const user={
    username:"drithika",
    price: 999,
    welcome:function(){
        console.log(` ${this.username}, welcome to website`);
        
    }
}
user.welcome()
user.username ="xkjadhakd"
user.welcome()
 console.log(`------------------------------------------------------------`);

//  const chai = function(){
//     let username ="drithika"
//     console.log(this.username); 
    
//  }// gives undefined output


const chai =()=> {
    let username ="drithika"
    console.log(this.username);  // this gives un defined
     // when only this ,  gives empthy {}
}

 chai()


  console.log(`arrow function syntax`);
  // const xyz =() => {}
    console.log(` const xyz =() => {}`);
  

    //simple function
     const addtwo= (n1,n2) =>{
        return n1+n2
     }
console.log (addtwo(3,4))

//implicit return 
const add3= (n3,n4,n5) => n3+n4+n5  // if something like the output needed is written in just ( no return key is needed ), but {in this we have to use return key}
 console.log(add3(3,4,5)); 


 