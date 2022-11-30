class Person {
    constructor(name){
        this.name = name;
    }

    sayMyNAme(){
        return `Hello! My name is ${this.name}!`;
    }
}

module.exports = {
    Person,
};