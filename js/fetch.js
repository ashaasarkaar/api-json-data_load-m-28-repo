const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
};   // fetch akta void function, karon ai ta kono kishu dibe na abar return o korbe na
