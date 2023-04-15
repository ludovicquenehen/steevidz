<template>
  <input
    v-model="value"
    type="text"
    :placeholder="placeholder"
    class="
      shadow-md
      border-solid border-primary border
      rounded-full
      h-12 md:w-1/3 w-full py-2 px-3
      hover:border-2
      focus:border-2 focus:outline-none
    "
    @input="$emit('input', value)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class SearchBar extends Vue {
  @Prop({ type: String, required: true })
  placeholder: string

  public value: string = ''
}
</script>