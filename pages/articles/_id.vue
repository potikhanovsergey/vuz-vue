<template>
    <v-container v-if="!isLoading && article">
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-h3 font-weight-bold">{{ article.name}}</v-card-title>
                    <v-img 
                        width="500px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    ></v-img>
                    <v-card-text class="text-h6">{{ article.date }}</v-card-text>
                    <v-card-text class="text-h5">{{ article.desc }}</v-card-text>

                    <article-comments />
                </v-card>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            article: null,
            isLoading: false
        }
    },
    created() {
        this.isLoading = true;
        fetch(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}`)
        .then(resp => resp.json())
        .then(art => {
            this.article = art;
            this.isLoading = false;
        })
    }
}
</script>
<style scoped>

.article {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 70%;
    margin: 0 auto;
}

</style>