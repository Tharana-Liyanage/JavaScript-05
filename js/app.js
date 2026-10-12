// console.log("hello");

// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");
// localStorage.setItem("city", "Panadura");

localStorage.clear();

// localStorage.removeItem("age");

// let name = localStorage.getItem("name","John");
// let age = localStorage.getItem("age" , "30");
// let city = localStorage.getItem("city", "Panadura");
// console.log(name, age, city);


//object in localStorage
let customer ={
    name : "Amal",
    age : 25,
    isMarried : true,
}

//localStorage.setItem("customer",customer);

//1st step
let stringCustomer = JSON.stringify(customer);

//2nd step
localStorage.setItem("customer", stringCustomer);