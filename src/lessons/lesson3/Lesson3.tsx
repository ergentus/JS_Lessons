import React, {useState} from 'react'
import API from './API'
import './lesson_3'

const Lesson3 = () => {
	const [searchName, setSearchName] = useState('')
	const [searchResult, setSearchResult] = useState('')
	const [searchNameByType, setSearchNameByType] = useState('')
	const [searchResultByType, setSearchResultByType] = useState('')

	const searchFilm = () => {
		API.searchFilmsByTitle(searchName)
			.then((res)=> {
				setSearchResult(res.data)
			})
	}

	const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
		const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : ''
		API.searchFilmsByType(searchNameByType, type)
			.then((res)=> {
				setSearchResultByType(res.data)
			})
	}

	return (
		<div>
			<h1>Promises</h1>
			<div>
				<h3><p>Search by name:</p></h3>
				<input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
				<button onClick={searchFilm}>Search</button>
				<div>
					{typeof searchResult === 'object' && (
						<pre>{JSON.stringify(searchResult, null, 1)}</pre>
					)}
				</div>
			</div>

			<div>
				<h3><p>Search by type:</p></h3>
				<input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
				<button onClick={searchByType} data-t="movie">Movie</button>
				<button onClick={searchByType} data-t="series">Series</button>
				<div>
					{typeof searchResultByType === 'object' && (
						<pre>{JSON.stringify(searchResultByType, null, 1)}</pre>
					)}
				</div>
			</div>
		</div>
	)
}
export default Lesson3