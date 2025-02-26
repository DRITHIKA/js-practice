 let myname= "drithika "
 let anothername=myname
 myname="khushi"
 console.log(myname);//gives drithika
 console.log(anothername);//gives khushi
 //puts first myname in the stack
 //then puts another name in the stack
 //then agaon myname

 //heap
 let user1={
    email: "xy@gmail.com",
    upi:"user1@ybl"
 }
 //this is how you put that in heap and when user 1 is called we get to have the reference from the hap toaccess its properties
 
 let user2=user1
 user2.email="zyss@gmail.com"//call by reference 
 
 
