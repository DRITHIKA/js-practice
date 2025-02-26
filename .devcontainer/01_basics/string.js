// all the funtions code
const gname="drithika"
console.log(gname.indexOf('t'))//3
const anothername= gname.substring(0,4)
console.log(anothername)//drit
const newstringgname=gname.slice(-8,5)
//can take negative values
console.log(newstringgname)//drith
const newstring1= "    drithika   "
console.log(newstring1.trim());//trims all white spaces

//trim statr and end functions are present and it can trim only white spaces and line terminaors which is \n
const url="https://drithika.com/drithika%22pradhan"
console.log(url.replace('%22','--'));
//split is also a function \
const gnamee="jahsdajd-kasha-skaja-hdja-jd"
console.log(gnamee.split('-'))
