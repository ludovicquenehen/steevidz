<template>
  <button
    :disabled="disabled"
    class="
      shadow-md
      bg-primary
      rounded-full
      h-12 lg:w-1/6 w-full py-2 px-3
      enabled:hover:border-2 enabled:hover:border-secondary
      enabled:active:bg-secondary
      disabled:opacity-50
      enabled:cursor-pointer disabled:cursor-not-allowed
    "
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({ type: String, required: true })
  text: string

  @Prop({ type: Boolean, default: false })
  disabled: boolean

  public value: string = ''
}
</script>