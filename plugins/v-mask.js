import { Vue } from 'nuxt-property-decorator'
import VueMask from 'v-mask'

Vue.use(VueMask, {
  placeholders: {
    '#': null,
    D: /\d/
  }
})
