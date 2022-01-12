<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <h1>Hel dsa 332121lo</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <articles-slider></articles-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
  },
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
}
</script>
