var Person = (function() {
    let firstNameSymbol = Symbol(),
        lastNameSymbol = Symbol();

    function Person(firstName, lastName) {
        this[firstNameSymbol] = firstName;
        this[lastNameSymbol] = lastName;
    }
    Person.prototype.greet = function (name) {
        return `Oh, hi ${name}.  I'm ${this[firstNameSymbol]} ${this[lastNameSymbol]}.`;
    };
    Object.defineProperty(Person.prototype, 'firstName', {
        get: function () {
            return this[firstNameSymbol];
        }
    });
    Object.defineProperty(Person.prototype, 'lastName', {
        get: function () {
            return this[lastNameSymbol];
        }
    });

    Person.renamePerson = function (person, lastName) {
        person[lastNameSymbol] = lastName;
    };

    return Person;
}());


let johnDoe = new Person('John', 'Doe'),
    joeDoe = new Person('Joe', 'Doe');



console.log(joeDoe.greet('John'));
console.log(johnDoe.greet('Joe'));
