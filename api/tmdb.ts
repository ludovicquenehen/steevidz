import axios from 'axios'
import { Result } from '~/types/TMDB.type'

const baseUrl = process.env.TMDB_URL
const token = process.env.TMDB_TOKEN

const headers = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

export const searchMovie = async (query: string, page: number = 1, year?: string): Promise<Result> => {
  return (await axios.get(`${baseUrl}search/movie?&query=${encodeURIComponent(query)}${year ? ('&year=' + year) : ''}&page=${page}&language=fr`, { ...headers }))?.data
}

export const getGenres = async () => {
  return (await axios.get(`${baseUrl}genre/movie/list`, { ...headers }))?.data.genres
}

export const posterPath = `${process.env.TMDB_IMG_BASE_PATH}w300`
export const backdropPath = `${process.env.TMDB_IMG_BASE_PATH}original`