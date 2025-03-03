const mysym = Symbol("key1");

const user = {
    name: "drithika",
    "full name": "drithika pradhan", // Can only be accessed using square brackets
    [mysym]: "mykey1", // Using Symbol as a key
    age: 18,
    location: "jaipur",
    email: "sjhdk@google.com",
    isLoggedIn: false,

    // Defining methods inside the object before freezing
    greeting: function () {
        console.log("Hello JS user");
    },

    greetingtwo: function () {
        console.log(`Hello JS user, ${this.name}`);
    }
};

// Accessing object properties
console.log(user.email);         // sjhdk@google.com
console.log(user["email"]);      // sjhdk@google.com
console.log(user["full name"]);  // drithika pradhan
console.log(user[mysym]);        // mykey1
console.log(typeof user[mysym]); // string

// Freezing the object after adding methods
Object.freeze(user);

console.log(user);

// Calling methods (no error now)
console.log(user.greeting());   // Hello JS user
console.log(user.greetingtwo()); // Hello JS user, drithika
