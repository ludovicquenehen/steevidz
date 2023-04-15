<template>
  <div class="flex flex-col text-center">
    <span class="text-primary text-8xl m-auto">{{ error.statusCode }}</span>
    <span class="text-primary text-4xl m-auto">Oups... petite erreur dans la matrice</span>
    <span class="text-primary text-2xl m-auto">Retenter votre chance un peu plus tard</span>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>