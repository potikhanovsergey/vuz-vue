<template>
    <div>
        <h1>Articles</h1>
        <v-container>
            <v-row>
                <v-col
                class="col-12 col-md-6 col-lg-4"
                v-for="art in articles" :key="art.id">
                    <article-card :art="art"></article-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'; 
export default {
    computed: {
        ...mapGetters({articles: 'getArticles'}),
    },
}
</script>

<style scoped>
    li {
        list-style: none;
    }
</style>