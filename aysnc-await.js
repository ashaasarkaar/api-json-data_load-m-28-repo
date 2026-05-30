// ai functiongulo excute houar sequence take ba activity take asynchronus bole, akhane j data excute hote kom somoi nibe, se ta age load hobe, r je tar load timing beshi se ta pore hobe, age pore doesn't matter

const data = async () => {
    console.log('true');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const json = await response.json();
    console.log(json);

    
    console.log('hello');   //

}
data();

