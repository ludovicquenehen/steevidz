<template>
  <div class="flex flex-col">
    <div class="flex justify-center sm:flex-row flex-col sm:space-x-4 space-x-0 sm:space-y-0 space-y-4">
      <SearchBar
        v-model="query"
        placeholder="Rechercher un film"
        @keyup.enter.native="search"
      />
      <InputNumber
        v-model="year"
        placeholder="Année"
      />
      <Button
        text="Rechercher"
        :disabled="!query"
        @click="search"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SearchBar from '@/components/SearchBar.vue'
import InputNumber from '~/components/InputNumber.vue'
import Button from '@/components/Button.vue'
@Component({
  components: { SearchBar, InputNumber, Button }
})
export default class HomePage extends Vue {
  public query: string =  ''
  public year: string = ''

  search() {
    
  }
}
</script>
