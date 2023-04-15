<template>
  <div class="flex flex-col">
    <div class="flex justify-center sm:flex-row flex-col sm:space-x-4 space-x-0 sm:space-y-0 space-y-4 sm:px-24 px-4">
      <SearchBar
        v-model="query"
        placeholder="Rechercher un film"
        @keyup.enter.native="search"
      />
      <InputNumber
        v-model="year"
        placeholder="Année"
        @keyup.enter.native=" search"
      />
      <Button
        text="Rechercher"
        :disabled="!query"
        @click="search"
      />
    </div>
    <Loader v-if="loading" class="mx-auto mt-6" />
    <template v-else>
      <div v-if="movies.length > 0" class="mt-6 grid sm:grid-cols-5 grid-cols-1 gap-4">
        <MovieCard v-for="movie in movies" :key="movie.id" :value="movie" />
      </div>
      <Pagination v-if="movies.length > 0 && nbPages > 1 && !loading" v-model="page" :nb-pages="nbPages" class="mx-auto mt-6" @change="search(false)" />
      <div v-if="searched && movies.length === 0 && !loading" class="mt-8 text-primary text-xl m-auto">
        Acucun résultat pour votre recherche
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SearchBar from '@/components/SearchBar.vue'
import InputNumber from '~/components/InputNumber.vue'
import Button from '@/components/Button.vue'
import MovieCard from '@/components/MovieCard.vue'
import Pagination from '@/components/Pagination.vue'
import Loader from '@/components/Loader.vue'

import { searchMovie, getGenres } from '~/api/tmdb'
import { Movie, Genre } from '~/types/TMDB.type.js'

@Component({
  components: {
    SearchBar,
    InputNumber,
    Button,
    MovieCard,
    Pagination,
    Loader
  }
})
export default class HomePage extends Vue {
  public loading: boolean = false
  public searched: boolean = false

  public query: string =  ''
  public year: string = ''
  public movies: Movie[] = []

  public page: number = 1
  public nbPages: number = 0

  public genres: Genre[] = []

  async search(reset = true) {
    if (!this.query) return
    if (reset) this.page = 1

    this.loading = true
    const { results, total_pages  } = await searchMovie(this.query, this.page, this.year)
    this.movies = results.map((e: Movie) => ({
      ...e,
      genre_names: e.genre_ids.map((i: number) => this.genres.find((g: Genre) => g.id === i)?.name),
      release_year: new Date(e.release_date).getFullYear()
    }))
    this.nbPages = total_pages
    this.searched = true
    
    // On simule un temps d'attente sinon le spinner n'est pas visible
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }

  async asyncData() {
    const genres = await getGenres()
    return { genres }
  }
}
</script>
