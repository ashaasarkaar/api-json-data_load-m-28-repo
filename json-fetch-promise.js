//JSON Promise
const output = fetch('https://jsonplaceholder.typicode.com/todos/1')   // fetch akta function, ai ta kono kisu return kore na, but wait korte bole deyar jonno
    //   .then(response => response.json())  // fetch() a chaining function kaj kore
    //   .then(json => console.log(json))

    .then(waitPhase => waitPhase.json())
    .then(data => console.log(data))  // j kono dhoroner JSON data amra aivabe console.log kore readable korte pari
    // console.log(output);