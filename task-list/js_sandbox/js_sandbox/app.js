function Person(firstname, lastname, dob) {
  this.firstname = firstname
  this.lastname = lastname
  this.birthday = new Date(dob)
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

// Person.prototype.greeting = function() {
//   return `Hello ${this.firstname}!`
// }

// function Customer(firstname, lastname, dob, membership) {
//   Person.call(this, firstname, lastname, dob)
//   this.membership = membership
// }

// Customer.prototype = Object.create(Person.prototype)

// Customer.prototype.constructor = Customer;

// // Customer.prototype.greeting = function() {
// //   return `Hello ${this.firstname}, you are a ${this.membership} member`
// // }
// const vic = new Person('victor', 'verheij', '10 April 1967')
const vic = new Person('robert', 'verheij', '29 Oct 1962')
// const cust1 = new Customer('Anna', 'Jagtman', '2 Aug 1970','gold')
console.log(vic)
console.log(vic.calculateAge())
// console.log(vic.greeting())
// console.log(cust1)
// console.log(cust1.greeting())


class Cat { 
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  speak() {
    return `miauw says ${this.name}`
  }
}

const nap = new Cat('nap')
console.log(nap.name)
console.log(nap.speak())


