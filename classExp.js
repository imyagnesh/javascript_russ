// const / let / var




class Animal {

    // variables
    abc = 'hello'

    // constructor call only once when you create instance
    constructor(params) {
        this.xyz = params;
    }

    // getter/setter
    set xyz(value) {
        this._xyz = value.toUpperCase();
    }

    get xyz() {
        return this._xyz;
    }

    
    static pqr = 10;

    static hasLegs() {
        console.log(this.xyz)
    }

    // method
    makeSound() {
        console.log(this.pqr)
        console.log(this.abc)
        console.log(this.xyz)
        console.log('Animal Sound')
    }

    canFly() {
        // var self = this;
        setTimeout(() => {
            console.log(this.xyz)
        }, 0)
        
        return false;
    }
}

const abc = new Animal('dog');
abc.canFly()

class Dog extends Animal {
    constructor(params) {
        super(params)
    }

    canSwim() {
        return true;
    }

    // method overriding
    makeSound() {
        super.makeSound()
        console.log('bow wow...')
    }
}

const d = new Dog('dog');
d.makeSound()
console.log(d.canSwim()); 

// Animal.hasLegs()

// console.log(Animal.pqr)

// // instance
// const animal = new Animal('dog');
// const cat = new Animal('cat')

// cat.makeSound()

// console.log(animal.makeSound())
// console.log(animal.canFly())

// const user = {
//   firstName: "Yagnesh",
//   lastName: "Modh",
//   age: 33,
//   gender: "male",
//   SSN: 2423432432,
//   password: "Password1",
// };

// const isAuth = (password) => {
//     return user.password === password;
// }

// const getAge = () => {
//     return user.age
// }

// Encapsulation
// Polimorphisam

// console.log(isAuth('Password1!'));
// console.log(getAge())


//   const accountInfo = {
//       balance: 10000,

//   }

const user1 = {
    name: 'yagnesh',
    age: 30,
    gender: 'male'
}

const user2 = {
    name: 'Russ',
    age: 40,
    gender: 'male'
}

const user3 = {
    name: 'Dipeeka',
    age: 28,
    gender: 'female'
}

// function User(name, age, gender) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
// };

class User {
    constructor(name, age, gender) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    get name() {
        return this._name
    }

    set name(value){
        this._name = value.charAt(0).toUpperCase() + value.slice(1)
    }


    increaseAge() {
        this.age = this.age + 1;
    }

    static sayHello() {
        return 'Hello';
    }
}

class Admin extends User {
    constructor(name, age, gender, role) {
       super(name, age, gender);
       this.role = role;
    }

    increaseAge() {
        this.age = this.age + 2;
    }
}

class Manger extends User {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.role = 'manager';
     }
}

// instanse
const yagnesh = new User('yagnesh', 33, 'male')
const russ = new User('russ', 40, 'male')
const admin = new Admin('Nolan', 70, 'male', 'admin')
admin.increaseAge()
console.log(admin)
yagnesh.increaseAge()
console.log(yagnesh.name)

console.log(User.sayHello())

console.log(yagnesh);
console.log(russ)


