<template>
  <div class="shadow-xl hover:scale-105">
    <div class="relative">
      <img v-if="imgSrc" :src="imgSrc" class="w-[500px]" />
      <div v-else class="no-img-available h-full w-full" />
      <div class="bg-black bg-opacity-50 absolute px-6 py-2 top-0 left-0 text-white">
        <span>{{ value.vote_average.toFixed(1) }}/10 ({{ value.vote_count }} votes)</span>
      </div>
      <div class="bg-black bg-opacity-50 absolute px-6 py-2 bottom-0 left-0 text-white h-1/2 max-w-[500px] space-y-2">
        <span class="text-xl">{{ value.title }} ({{ value.release_year }})</span>
        <span class="overview">{{ value.overview }}</span>
        <div class="text-sm space-x-1 flex flex-wrap">
          <span v-for="genre in value.genre_names" class="rounded-full bg-gray bg-opacity-50 py-2 px-4 mb-1">{{ genre }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import { posterPath } from '~/api/tmdb'
import { Movie } from '~/types/TMDB.type'

@Component
export default class MovieCard extends Vue {
  @Prop({ type: Object, required: true })
  value: Movie

  get imgSrc() {
    return this.value.poster_path ? `${posterPath}${this.value.poster_path}` : null
  }
}
</script>

<style scoped>
.no-img-available {
  background: repeating-linear-gradient(
    45deg,
    #c0c0c0,
    #c0c0c0 10px,
    #fff 10px,
    #fff 20px
  );
  filter: blur(1px);
}

.overview {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3; 
  -webkit-box-orient: vertical;
}
</style>