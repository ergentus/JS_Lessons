console.log('Lesson 7')
// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают
// class Animal {
// 	name: string
// 	constructor(name = 'Animal') {
// 		this.name = name
// 	}
//
// 	walk() {
// 		console.log(`the ${this.name} walking`)
// 	}
// 	eat() {
// 		console.log(`the ${this.name} eating`)
// 	}
// 	sleep() {
// 		console.log(`the ${this.name} sleeping`)
// 	}
//
// }
//
// const rabbit = new Animal()
// rabbit.walk()
// rabbit.eat()
// rabbit.sleep()
// //Task 02
// // Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// // параметра, реализовать методы roar и climb аналогично классу Animal
// // проверить, что все методы работают
//
// class Monkey extends Animal {
// 	constructor(name = 'Monkey') {
// 		super(name)
// 		this.name = name
// 	}
//
// 	roar() {
// 		console.log(`the ${this.name} roaring`)
// 	}
//
// 	climb() {
// 		console.log(`the ${this.name} climbing`)
// 	}
// }
//
// const monkey = new Monkey
// monkey.roar()
// monkey.climb()
// monkey.walk()
// monkey.eat()
// monkey.sleep()
// //Task 03
// // Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// // параметра, реализовать методы speak и think аналогично классу Animal
// // проверить, что все методы работают
//
// class Human extends Monkey {
// 	constructor(name = 'Human') {
// 		super(name)
// 		this.name = name
// 	}
//
// 	speak() {
// 		console.log(`the ${this.name} speaking`)
// 	}
//
// 	think() {
// 		console.log(`the ${this.name} thinking`)
// 	}
//
//
// }
//
// const human = new Human()
//
// human.speak()
// human.think()
// human.roar()
// human.walk()
// human.eat()
// human.sleep()

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

interface AnimalInterface {
	name: string
	walk: () => void
	eat: () => void
	sleep: () => void
}

interface MonkeyInterface extends AnimalInterface {
	roar: () => void
	climb: () => void
}

interface HumanInterface extends MonkeyInterface {
	speak: () => void
	think: () => void
}

function Animal(this: AnimalInterface, name: string = 'Animal') {
	this.name = name

	this.walk = function () {
		console.log(`the ${this.name} walking`)
	}
	this.eat = function () {
		console.log(`the ${this.name} eating`)
	}
	this.sleep = function () {
		console.log(`the ${this.name} sleeping`)
	}
}

function Monkey(this: MonkeyInterface, name: string = 'Monkey') {
	Animal.call(this, name)

	this.roar = function () {
		console.log(`the ${this.name} roaring`)
	}
	this.climb = function () {
		console.log(`the ${this.name} climbing`)
	}
}

function Human(this: HumanInterface, name: string = 'Human') {
	Monkey.call(this, name)

	this.speak = function () {
		console.log(`the ${this.name} roaring`)
	}
	this.think = function () {
		console.log(`the ${this.name} climbing`)
	}
}

Monkey.prototype = Object.create(Animal.prototype)
Monkey.prototype.constructor = Monkey
Human.prototype = Object.create(Monkey.prototype)
Human.prototype.constructor = Human

const rabbit: AnimalInterface = new (Animal as any)
const monkey: MonkeyInterface = new (Monkey as any)
const human: HumanInterface = new (Human as any)
rabbit.walk()
rabbit.eat()
rabbit.sleep()

monkey.walk()
monkey.eat()
monkey.sleep()
monkey.roar()
monkey.climb()

human.walk()
human.eat()
human.sleep()
human.roar()
human.climb()
human.speak()
human.think()
// Task 05
// Используя метод Apply реализовать свой собственный метод bind


// just a plug
export default () => {
};