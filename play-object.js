const person = {
  name: 'Dimas',
  age: 21,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();
