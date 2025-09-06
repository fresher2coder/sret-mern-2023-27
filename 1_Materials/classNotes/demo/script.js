/*

//callback
function display(a, callback) {
  a = a * 2;
  callback(a);
}

const fn2 = (a) => {
  console.log("fn called");
  console.log("2 times a", a);
};

fn2(10);
display(10, fn2);

//fetch user from db
//display the user details
const fetchUser = (callback) => {
  //fetched user
  const user = { name: "Dineshkumar", age: 34 };
  callback(user);
};
const displayUser = (user) => {
  console.log(user);
};

fetchUser(displayUser);


//async
console.log("Start");

setTimeout(() => {
  console.log("5000");
}, 5000);
setTimeout(() => {
  console.log("Zero");
}, 0);
setTimeout(() => {
  console.log("3000");
}, 3000);

console.log("End");



const promise1 = new Promise((res, rej) => {
  //res & ref -CB
  let love = false;
  if (love) res("Heart");
  else rej("Broken Heart");
});

promise1
  .then((data) => {
    console.log("Marraige", data); //res
  })
  .catch((data) => {
    console.log("BreakUP", data); //rej
  });

*/

//api calls - fetch axios(npm)
//npm init -y
//npm install axios
//import
import axios from "axios";

const fetchTodo = () => {
  const todos = axios.get("https://jsonplaceholder.typicode.com/todos");

  console.log(todos);
};

fetchTodo();
