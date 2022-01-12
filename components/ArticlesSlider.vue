<template>
    <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
    >
        <v-carousel-item
        v-for="(art, i) in articles"
        :key="i"
        >
        <v-sheet
            :color="colors[i]"
            height="100%"
        >
            <v-row
            class="fill-height flex-column"
            align="center"
            justify="center"
            
            >
                <div class="text-h2">
                    {{ art.name }}
                </div>
                                
                <v-btn
                class="mt-5"
                :to="{name: 'articles-id', params: art}">
                    К новости
                </v-btn>

            </v-row>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
import { mapGetters } from 'vuex'; 

export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  computed: {
      ...mapGetters({articles: 'getSliderArticles'})
  }
}
</script>

<style lang="scss" scoped>


</style>