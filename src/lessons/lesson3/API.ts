import axios from 'axios'


const key = '5d4c7fba'
const axiosInstance = axios.create({
	baseURL: `https://www.omdbapi.com/`,
})

const API = {
	searchFilmsByTitle: (title: string) => {
		return axiosInstance.get(`?apikey=${key}&t=${title}`)
	},
	searchFilmsByType: (title: string, type: string) => {
		return axiosInstance.get(`?apikey=${key}&s=${title}&type=${type}`)
	},
}


export default API
