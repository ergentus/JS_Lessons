console.log('Lesson 6')

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

class Student {
	name: string
	surename: string
	group: number
	grade: number[]

	constructor(name: string, surename: string, group: number, grade: number[]) {
		this.name = name
		this.surename = surename
		this.group = group
		this.grade = grade
	}

	get averageGrade(): number {
		return this.grade.reduce((acc, e): number => acc + e, 0) / this.grade.length
	}

}


const student = [
	new Student('Иван', 'Иванов', 1, [4, 5, 3, 4, 5]),
	new Student('Петр', 'Петров', 2, [3, 4, 5, 4, 3]),
	new Student('Сидор', 'Сидоров', 1, [5, 5, 5, 5, 5]),
	new Student('Мария', 'Кузнецова', 3, [3, 4, 3, 4, 3]),
	new Student('Алексей', 'Смирнов', 4, [4, 4, 4, 4, 4]),
	new Student('Елена', 'Петрова', 3, [5, 4, 3, 4, 5]),
	new Student('Дмитрий', 'Иванов', 2, [4, 5, 4, 5, 4]),
	new Student('Анна', 'Сидорова', 4, [3, 3, 4, 3, 4]),
	new Student('Владимир', 'Кузнецов', 3, [5, 5, 4, 5, 5]),
	new Student('Ольга', 'Смирнова', 1, [4, 4, 5, 4, 4]),
]

student.sort((a, b) => a.averageGrade - b.averageGrade)
console.log(student)
student.filter(el => {
	if (el.averageGrade === 5 || el.averageGrade === 4) {
		console.log(`Фамилия: ${el.surename} Группа: ${el.group} имеет балл: ${el.averageGrade}`)
	}
})

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса? -нет
// Можно ли создать метод класса который будет удалять экземпляр класса? - нет

class Two {
	one: string
	two: string

	constructor(one: string, two: string) {
		this.one = one
		this.two = two
	}

	deleteInstance() {
		// @ts-ignore
		delete this
	}
}

const second = new Two('odin', 'dva')
second.deleteInstance()
console.log(second)

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

class Time {
	private _hours
	private _minutes
	private _seconds

	constructor(hours: number, minutes: number, seconds: number) {
		if (hours < 0 || hours > 23) {
			throw new Error('Invalid hours value')
		}
		if (minutes < 0 || minutes > 59) {
			throw new Error('Invalid minutes value')
		}
		if (seconds < 0 || seconds > 59) {
			throw new Error('Invalid seconds value')
		}
		this._hours = hours
		this._minutes = minutes
		this._seconds = seconds
	}

	get hours() {
		return this._hours
	}

	set hours(value: number) {
		if (value < 0 || value > 23) {
			throw new Error('invalid hours value')
		}
		this._hours = value
	}

	get minutes() {
		return this._minutes
	}

	set minutes(value: number) {
		if (value < 0 || value > 59) {
			throw new Error('invalid minutes value')
		}
		this._minutes = value
	}

	get seconds() {
		return this._seconds
	}

	set seconds(value: number) {
		if (value < 0 || value > 59) {
			throw new Error('invalid seconds value')
		}
		this._seconds = value
	}

	get timer() {
		return `${this._hours}:${this._minutes}:${this._seconds}`
	}
}

let timer = new Time(12, 11, 10)
console.log(timer)


// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.
class Buyer {
	private name: string
	private surname: string
	private address: string
	private ban: number

	constructor(name: string, surname: string, address: string, ban: number) {
		this.name = name
		this.surname = surname
		this.address = address
		this.ban = ban
	}

	public getName() {
		return this.name
	}

	public setName(name: string) {
		this.name = name
	}

	public getSurname() {
		return this.surname
	}

	public setSurname(surname: string) {
		this.surname = surname
	}

	public getAddress() {
		return this.address
	}

	public setAddress(address: string) {
		this.address = address
	}

	public getBan() {
		return this.ban
	}

	public setBan(ban: number) {
		this.ban = ban
	}

	get profileInfo() {
		return `Фамилия: ${this.name} Имя: ${this.surname} Адрес: ${this.address} Номер банковского счета: ${this.ban}`
	}
}

const buyers = [
	new Buyer('Oleg', 'Mos', 'moskow', 4983),
	new Buyer('Alex', 'Alexev', 'spb', 4213),
	new Buyer('John', 'Johner', 'moskow', 1234),
	new Buyer('Oleg', 'Mos', 'moskow', 7123),
]

const newBuyers: Buyer[] = buyers.filter(e => e.getBan() >= 1000 && e.getBan() <= 5000).sort((a, b) => a.getName().localeCompare(b.getName()))

console.log(newBuyers)
console.log(buyers.map(e => e.profileInfo))
// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

class Car {
	protected brand: string
	protected readonly cylinders: number
	protected readonly power: string

	constructor(brand: string, cylinders: number, power: string) {
		this.brand = brand
		this.cylinders = cylinders
		this.power = power
	}

	print() {
		console.log(`Марка автомобиля: ${this.brand}, Кол-во цилиндров: ${this.cylinders}, Мощность: ${this.power}`)
	}
}

class Truck extends Car {
	private load_weight: number
	constructor(brand: string, cylinders: number, power: string, load_weight: number) {
		super(brand, cylinders, power)
		this.load_weight = load_weight
	}
	public setBrand(brand: string) {
		this.brand = brand
	}

	public setLoad(load_weight: number) {
		this.load_weight = load_weight
	}

	print() {
		console.log(`Марка грузовика: ${this.brand}, Кол-во цилиндров: ${this.cylinders}, Мощность: ${this.power}, Грузоподъемность: ${this.load_weight}`)
	}
}

const cars = [
	new Car('BMW', 4, '300лс'),
	new Car('Mazda', 2, '500лс'),
	new Car('Honda', 6, '340лс'),
]
cars.map(e => e.print())
const myTruck = new Truck('GRUZOVIK', 500, '300лс', 10000)
myTruck.print()

// just a plug
export default () => {
};