const person = {
    name: 'Abul',
    age: '23',
    fruit: 'Orange',
    dish: 'halim',
    isRich: false,
    money: 20000,
};
console.log(person, typeof person);

// JSON -> JS Object with Notation
// JSON.stringify() method use korbo
//JSOn.strigify() -> JSON
//JSON.parse -> object

const personJSON = JSON.stringify(person);  // aikhane object take string a convert koreche JSON
// JSON sob kisu k notation(double Quation) ar moddhe nei, shudhu boolean value r number k chara. 
console.log(personJSON, typeof personJSON);

// convert JSON string to Object again
const parseJSON = JSON.parse(personJSON); 
console.log(parseJSON, typeof parseJSON); // JSON string k abar object a convert korbe

//JSON holo object ar akta bishesh method