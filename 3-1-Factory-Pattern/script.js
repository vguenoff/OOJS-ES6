function createPerson(firstName, lastName) {
    return {
        get firstName() {
            return firstName;
        },
        get lastName() {
            return lastName;
        },
        greet: function (name) {
            return `Oh, hi ${name}.  I'm ${firstName} ${lastName}.`;
        }
    };
}

let johnDoe = createPerson('John', 'Doe'),
    joeDoe = createPerson('Joe', 'Doe');

console.log(joeDoe.greet('John'));
console.log(johnDoe.greet('Joe'));
