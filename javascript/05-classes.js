// class MyClass {
//     constructor() {
//         metodo01(){

//         }
//         metodo02(){

//         }
//     }
// }

// const myConst = class MyClass{};

// const MyConst2 = class {}

// function MakeClass() {
//     return class {}
// }

// class Dog {}

// const Belinha = new Dog();

// console.log(Belinha);


// class Dog {

//     constructor(name) {
//         this._name = name;
//     }
// }

// const Pet = new Dog('Belinha')

// console.log(Pet._name);

// nomeDoMetodo() {
//     return
// }

// get nomeDoMetodo(name) {
//     return this.name;
// }

// set nomeDoMetodo(){
//     this.name;
// }

// static nomeDoMetodo (name) {
//     retirn this._name;
// }


// class MyClass {
//     // constructor(name) {
       
//     // }
//     static Valor(name) {
//         this.name;
//     }
// }

// let Teste = new MyClass('Name');
// console.log(MyClass.Valor)

class Animal {
    constructor(name){
        this._name = name;
    }

    speakTest(){
        return console.log(`${this.name} faz barulho`);
    }

    speak(){
        console.log(`${this.name} faz barulho`);
    }
}


// const myPets = new Animal('Belinha');
// console.log(myPets);


// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} late`);
//     }
// }

// class  Cat extends Animal {
//     speak() {
//         console.log(`${this.name} mia`);
//     }
// }

// const MyDog = new Dog("Cacau");
// const MyCat= new Dog("Tom ");

// MyDog.speak();
// MyCat.speak();