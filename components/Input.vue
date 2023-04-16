<template>
  <input
    v-model="value"
    type="text"
    :placeholder="placeholder"
    :class="[
      'shadow-md border-solid border-primary border rounded-full h-12 py-2 px-3 hover:border-2 focus:border-2 focus:outline-none',
      size
    ]"
    v-bind="$attrs"
    @input="$emit('input', value)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class InputNumber extends Vue {
  @Prop({ type: String, required: true })
  placeholder: string

  @Prop({ type: String, default: '' })
  size: string

  public value: string = ''
}
</script>