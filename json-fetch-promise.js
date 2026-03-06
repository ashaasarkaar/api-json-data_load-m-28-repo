//JSON Promise
// const output = fetch('https://jsonplaceholder.typicode.com/todos/1')   // fetch akta function, ai ta kono kisu return kore na, but wait korte bole deyar jonno
    //   .then(response => response.json())  // fetch() a chaining function kaj kore, fetch server theke data anar ba pathanor sohoj upai
    //   .then(json => console.log(json))

    // .then(waitPhase => waitPhase.json())
//.then(data => console.log(data))  // j kono dhoroner JSON data amra aivabe console.log kore readable korte pari
// console.log(output);

//Arrow function with fetch
// const loadData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(waitPhase => waitPhase.json())
//         .then(data => console.log(data));
// };


const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
};