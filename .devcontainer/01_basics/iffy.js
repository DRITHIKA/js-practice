// Immediately Invoked Function Expression (IIFE)
// We use this to avoid global scope pollution

(function chai() {
    console.log(`DB connected`);
})(); // Semicolon to end the code

((name) =>{
    console.log(`DB connected two ${name}`);
})('drithika'); 
