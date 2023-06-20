import React from 'react'
import './lesson_4'
import {handlePromise} from './lesson_4'


const Lesson4 = () => {
	const createPromise = () => {
		handlePromise.promise = new Promise((resolve, reject) => {
			handlePromise.resolve = resolve
			handlePromise.reject = reject
		})
		handlePromise.promise
			.then(handlePromise.onSuccess)
			.catch(handlePromise.onError)

		window.test = handlePromise
	}

	const resolvePromise = () => {
		handlePromise.resolve && handlePromise.resolve('resolved data')
	}
	const rejectPromise = () => {
		handlePromise.reject && handlePromise.reject('error message')
	}

	return (
		<div>
			<button id="btn-create-promise" onClick={createPromise}>Create Promise</button>
			<button id="btn-resolve-promise" onClick={resolvePromise}>Resolve Promise</button>
			<button id="btn-reject-promise" onClick={rejectPromise}>Reject Promise</button>
		</div>
	)
}

export default Lesson4