const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());