console.log('lesson 2')

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
const sum = (a: number) => {
	return function (b: number) {
		return a + b
	}
}
console.log(sum(3)(4))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
	let counter = 0
	return function () {
		return ++counter
	}
}

const counter = makeCounter()
const counter2 = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2(n: number) {
	let counter = n
	return {
		increase() {
			return ++counter
		},
		decrease() {
			return --counter
		},
		reset() {
			return counter = 0
		},
		set(a: number) {
			return counter = a
		},
	}
}

const counter3 = makeCounter2(10)

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: any) {
	if (n === 0) {
		return 0
	}
	let _args: any = []

	return function helper(...args: any) {
		_args = [..._args, ...args]

		if (_args.length >= n) {
			_args.length = n

			return _args.reduce((acc: any, prev: any) => acc + prev)
		} else {
			return helper
		}
	}
}

// @ts-ignore
console.log(superSum(2)(3)(3, 5))
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

function sumTo(n: number): number {
	if (n <= 1) return n

	return n + sumTo(n - 1)
}

console.log(sumTo(80))

function sumToCycle(n: number) {
	let counter = 0
	for (let i = 1; i <= n; i++) {
		counter += i
	}
	return counter
}

console.log(sumToCycle(5))

function sumToAryphmetic(n: number) {
	return (1 + n) / 2 * n
}

console.log(sumToAryphmetic(5))

function factorial(n: number): number {
	if (n <= 1) {
		return n
	}

	return n * factorial(n - 1)
}

console.log(factorial(6))

function fib(n: number): number {
	if (n <= 2) {
		return 1
	}

	return fib(n - 1) + fib(n - 2)
}

console.log(fib(5))

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
}

function printList(list: any): any {
	alert(list.value)

	if (list.next) {
		printList(list.next)
	}
}

function printList2(list: any): any {
	while (list) {
		alert(list.value)
		list = list.next
	}
}

printList(list)
printList2(list)

function reversePrintList(list: any): any {

	if (list.next) {
		reversePrintList(list.next)
	}
	alert(list.value)
}

reversePrintList(list)

function reversePrintList2(list: any): any {
	const arr = []

	while (list) {
		arr.push(list.value)
		list = list.next
	}
	for (let i = arr.length - 1; i >= 0; i--) {
		alert(arr[i])
	}
}

reversePrintList2(list)
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// @ts-ignore

Array.prototype.myFlat = function (depth:any = 1/0) {
	let flattenedArr: any = []

	for (let i = 0; i < this.length; i++) {
		if (Array.isArray(this[i]) && depth > 0) {
			flattenedArr = flattenedArr.concat(this[i].myFlat(depth - 1))
		} else {
			flattenedArr.push(this[i])
		}
	}

	return flattenedArr
}

// console.log([1, 2, [3], [[[4], 5]]].myFlat(1))
// just a plug
export default () => {
};