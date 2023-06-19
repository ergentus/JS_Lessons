import axios from 'axios'

console.log('lesson 3')

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/
// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU
// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then((response) => response.json())
// 	.then((json) => console.log(json))
//
// fetch('https://jsonplaceholder.typicode.com/posts', {
// 	method: 'POST',
// 	body: JSON.stringify({
// 		title: 'foo',
// 		body: 'bar',
// 		userId: 1,
// 	}),
// 	headers: {
// 		'Content-type': 'application/json; charset=UTF-8',
// 	},
// })
// 	.then((response) => response.json())
// 	.then((json) => console.log(json))
//
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
// 	method: 'PUT',
// 	body: JSON.stringify({
// 		id: 1,
// 		title: 'foo',
// 		body: 'bar',
// 		userId: 1,
// 	}),
// 	headers: {
// 		'Content-type': 'application/json; charset=UTF-8',
// 	},
// })
// 	.then((response) => response.json())
// 	.then((json) => console.log(json))
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
// 	method: 'PATCH',
// 	body: JSON.stringify({
// 		title: 'foo',
// 	}),
// 	headers: {
// 		'Content-type': 'application/json; charset=UTF-8',
// 	},
// })
// 	.then((response) => response.json())
// 	.then((json) => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
// 	method: 'DELETE',
// })

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
})

instance.get('posts')
	.then(res => console.log(res.data))
instance.post('posts', {title: 'newItem', body: 'food', userId: 1})
	.then(res => console.log(res.data))
instance.put('posts/1', {id: 1, title: 'newItem', body: 'food', userId: 1})
	.then(res => console.log(res.data))
instance.patch('posts/1', {title: 'foo'})
	.then(res => console.log(res.data))
instance.delete('posts/1')
	.then(res => console.log(res.data))

export default () => {
}