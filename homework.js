const persons = [];
let newUser;

while (true) {
    let inputData = prompt('Enter your personal data separated by ","', '10,Leo,Messi,36');
    if (inputData === null || inputData === '') break;
    newUser = inputData.split(',');
    let p1 = new Person(newUser[0], newUser[1], newUser[2], newUser[3]);
    if (newUser[0] === undefined || newUser[1] === undefined || newUser[2] === undefined || newUser[3] === undefined)
    {
        alert('Not a valid input, please try again');
    } else {
        persons.push(p1);
    }
}

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].id + '.', persons[i].fullName() + ',', persons[i].age);
}


function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

