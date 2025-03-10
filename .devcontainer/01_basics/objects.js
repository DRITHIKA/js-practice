const tinderuser= new Object() //singleton object
const tinder={} //non singleton object

 tinderuser.id="ysagda"
 tinderuser.name="drithika"
 tinderuser.isLoggedIn= false

// console.log(tinderuser);

const regularuser= {
    email: "kjshj@gmail.com",
    fullname :{
        //apne aap m hi ek objecy h
        userfullname:{
            //nesting objects
            firstname: "drithika", //coma is needed
            lastname:"pradhan"

        }
    }
}

console.log(regularuser.fullname);

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}

const obj3= Object.assign({},obj1,obj2)
//target , object so we use one empty{} so that others become the source abd it becomes 
 // best way]
  const obj4= {...obj1,...obj2,...obj3}
  console.log(obj3);
  console.log(obj4);
  

  //VALUES FROM DATABASE

  const user =[
    
    {
        idee:1,
        emaail: "hgdja@gmail.com"
    },
    {
        idee:1,
        emaail: "hgdja@gmail.com"
    },
    {
        idee:1,
        emaail: "hgdja@gmail.com"
    },
    {
        idee:1,
        emaail: "hgdja@gmail.com"
    },
    

  ]

  const course={
    coursename:"jsinhindi",
    price: "999",
    courseInstructor: "drithika"


  }
  const {courseInstructor: instructor}= course
  console.log(instructor); //drithika

//   {// JSON FORMAT
//     "name" : "drithika",
//     "food":"paneer",
//     "class" :"third year"
//   }
  
[
    {},
    {},
    { }
]