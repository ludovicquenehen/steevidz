<template>
  <div class="flex space-x-4">
    <span v-if="value !== 1" class="text-primary text-xl" @click="setPage(1)">&lt;&lt;</span>
    <span v-if="value !== 1" class="text-primary text-xl" @click="setPage(value - 1)">&lt;</span>
    <span v-if="before" class="text-primary text-xl">...</span>
    <span
      v-for="i in range"
      :key="`page-${i}`"
      :class="
        [
          'text-primary text-xl',
          { '!text-secondary font-semibold': value === i }
        ]
      "
      @click="setPage(i)"
    >
      {{ i }}
    </span>
    <span v-if="after" class="text-primary text-xl">...</span>
    <span v-if="!isLast" class="text-primary text-xl" @click="setPage(value + 1)">&gt;</span>
    <span v-if="!isLast" class="text-primary text-xl" @click="setPage(nbPages)">&gt;&gt;</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

const MAX_PAGES = 12

@Component
export default class Pagination extends Vue {
  @Prop({ type: Number, required: true })
  nbPages: number

  @Prop({ type: Number, required: true })
  value: number

  get range() {
    const pages = Array.from({length: this.nbPages}, (_, i) => i + 1)
    if (this.nbPages <= MAX_PAGES) return pages
    
    const min = this.value > 3 ? this.value - 3 : 0
    const max = this.value < this.nbPages - 2 ? this.value + 2 : this.nbPages
    return pages.slice(min, max )
  }

  get isLast() {
    return this.value === this.nbPages
  }

  get before() {
    return this.range[0] !== 1
  }

  get after() {
    return this.range[this.range.length - 1] !== this.nbPages
  }

  setPage(page: number) {
    const p = page <= 1 ? 1 : page >= this.nbPages ? this.nbPages : page
    console.log(p)
    this.$emit('input', p)
    this.$emit('change', p)
  }
}
</script>