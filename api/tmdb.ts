import axios from 'axios'
import { Result } from '~/types/TMDB.type'

const baseUrl = process.env.TMDB_URL
const apiKey = process.env.TMDB_API_KEY

export const searchMovie = async (query: string, page: number = 1, year?: string): Promise<Result> => {
  return (await axios.get(`${baseUrl}search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}${year ? ('&year=' + year) : ''}&page=${page}&language=fr`))?.data
}

export const getGenres = async () => {
  return (await axios.get(`${baseUrl}genre/movie/list?api_key=${apiKey}`))?.data.genres
}

export const posterPath = `${process.env.TMDB_IMG_BASE_PATH}w300`
export const backdropPath = `${process.env.TMDB_IMG_BASE_PATH}original`