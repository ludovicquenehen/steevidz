export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  genre_names?: string[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  release_year?: number
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type Genre = {
  id: number
  name: string
}

export type Result = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}