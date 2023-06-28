// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

const str = 'fgfggg'
console.log(str[0])
// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

Number.prototype.plus = function (num) {
   return this.valueOf() + num
}

Number.prototype.minus = function (num) {
   return this.valueOf() - num
}

console.log((2).plus(3).minus(1))
// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

function strinFc(op, str1, str2, str3) {
   return str1 + op + str2 + op + str3
}

function concatenateStrings(...strings) {
   return strings.filter(str => str !== '*').join('*')
}

console.log(strinFc('*', '1', 'b', '1c'))
console.log(concatenateStrings('1', 'b', '1c'))
// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
   valueNode: 3,
   next: [
      {
         valueNode: 1,
         next: null,
      },
      {
         valueNode: 3,
         next: null,
      },
      {
         valueNode: 2,
         next: null,
      },
      {
         valueNode: 2,
         next: [
            {
               valueNode: 1,
               next: null,
            },
            {
               valueNode: 5,
               next: null,
            },
         ],
      }],
}

function sum1(tree) {
   if (Array.isArray(tree)) {
      return tree.reduce((acc, e) => {
         if (Array.isArray(e.next)) {
            return acc + e.valueNode + sum1(e.next)
         } else {
            return acc + e.valueNode
         }
      }, 0)
   } else {
      return tree.valueNode + sum1(tree.next)
   }
}

function sum2(tree) {
   let sum = tree.valueNode

   if (tree.next) {
      tree.next.forEach(e => {
         sum += sum2(e)
      })
   }
   return sum
}

function sum3(tree) {
   let sum = tree.valueNode

   for (let i = 0; i < tree.next.length; i++) {
      sum += tree.next[i].valueNode
      if (Array.isArray(tree.next[i].next)) {
         for (let j = 0; j < tree.next[i].next.length; j++) {
            sum += tree.next[i].next[j].valueNode
         }
      }
   }
   return sum
}

console.log(sum3(tree))
// Task 5
// исправить код, что бы работал правильно

for (let i = 0; i < 10; i++) {
   setTimeout(function () {
      // console.log(i)
   }, 100)
}


// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
   this.name = name
   this.author = author
   return this
}

function Foo(Constructor, name, author) {
   return new Constructor(name, author)
}

let book = Foo(Book, 'Учебник javascript', 'Петр Сергеев')
console.log(book.author)

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

function f(a) {
   return function (b) {
      return a + b
   }
}

function fAnother(a, b) {
   if (typeof b === 'undefined') {
      return function (x) {
         return a + x
      }
   } else {
      return a + b
   }
}

console.log(f(2)(3))

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

function f2(value) {
   let sum = value

   return function innerF(nextValue) {
      if (typeof nextValue === 'undefined') {
         return sum
      } else {
         sum += nextValue
         return innerF
      }
   }
}

console.log(f2(1)(2)(3)())
console.log(f2(0)(3)(1)(5)())


// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3
function plus(func) {
   return func
}

function minus(func) {
   return -func
}

function seven(func = 0) {
   return 7 + func
}

function one(func = 0) {
   return 1 + func
}

function five(func = 0) {
   return 5 + func
}

function two(func = 0) {
   return 2 + func
}

console.log(seven(plus(one())))
console.log(five(minus(two())))


// Task 10
// Реализовать функцию сортировки массива пузырьком
const arr = [1000, 26, 10, 3, 95, 3]

function bubble(arr) {
   let flag = false
   for (let i = 0; i < arr.length && !flag; i++) {
      flag = true
      for (let j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            flag = false
         }
      }

   }
   return arr
}

console.log(bubble(arr))
// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
let str2 = '(){[]}'

function isBracketsClosed(str) {
   const stack = []
   const bracketsMap = {
      ')': '(',
      '}': '{',
      ']': '[',
   }
   for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (char === '(' || char === '{' || char === '[') {
         stack.push(char)
      } else if (char === ')' || char === '}' || char === ']') {
         const lastChar = stack.pop()
         if (lastChar !== bracketsMap[char]) {
            return false
         }
      }
   }
   return stack.length === 0
}

console.log(isBracketsClosed(str2))
// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
function uniqueArr(arr) {
   let newArr = new Set(arr)
   return [...newArr]
}

console.log(uniqueArr(arr))
// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

const arr2 = [1, 2, null, 7, 8, null, 3]

function doubleArr(arr2) {
   return arr2.filter(e => typeof e === 'number').map(e => e * 2)
}

console.log(doubleArr(arr2))
// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
   value: 1,
   children: [
      {
         value: 2,
         children: [
            {value: 4},
            {value: 5},
         ],
      },
      {
         value: 3,
         children: [
            {value: 6},
            {value: 7},
         ],
      },
   ],
}

function getTreeValues(tree) {
   let values = []

   function inner(tree) {
      values.push(tree.value)
      if (tree.children) {
         tree.children.forEach(e => inner(e))
      }
   }

   inner(tree)
   return values
}

console.log(getTreeValues(tree2))

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

function getTreeValues2(tree) {
   let sum = tree.value

   if (tree.children) {
      tree.children.forEach(e => {
         sum += e.value + getTreeValues2(e)
      })
   }

   return sum
}

console.log(getTreeValues2(tree2))

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).
function Bomb(time, sound) {
   this.time = time
   this.sound = function () {
      setTimeout(() => console.log(sound), time)
   }
}

const bomb = new Bomb(3000, 'baaam')
console.log(bomb.sound())
// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFF'); // => 'AV3B3V2XDHJF4'
function rle(str) {
   let newStr = ''
   let count = 1

   for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
         count++
      } else {
         newStr += str[i] + (count > 1 ? count : '')
         count = 1
      }
   }
   return newStr
}

console.log(rle('AVVVBBBVVXDHJFFFF'))


// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
function isSorted(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
         return false
      }
   }
   return true
}

console.log(isSorted([1, 6, 3]))
// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

function missing(arr) {
   arr.sort((a, b) => a - b)
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] + 1 !== arr[i + 1] && arr[i + 1] !== undefined) {
         return arr[i] + 1
      }
   }
   return undefined
}

console.log(missing([5, 1, 4, 3]))


// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
class LinkedList {
   constructor() {
      this.values = [];
   }

   add(value) {
      this.values.push(value);
   }

   has(value) {
      return this.values.includes(value);
   }
}
let list = new LinkedList()
list.add(1)                           // undefined
list.add(5)                           // undefined
console.log(list.has(1) )                         // true
console.log(list)
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль? 123456
//
// Promise
//    .resolve()
//    .then(() => console.log(1))
//    .then(() => console.log(2))
//    .then(() => console.log(3))
//
// Promise
//    .resolve()
//    .then(() => console.log(4))
//    .then(() => console.log(5))
//    .then(() => console.log(6))
