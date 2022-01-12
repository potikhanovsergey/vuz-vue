<template>
    <v-container v-if="article">
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

                    <v-list three-line class="pl-3">
                        <h3 class="text-h3">Комментарии</h3>
                        <template v-for="(item, index) in article.comments">
                            <v-subheader
                                v-if="item.header"
                                :key="item.header"
                                v-text="item.header"
                            ></v-subheader>

                            <v-divider
                            v-else-if="item.divider"
                            :key="index"
                            :inset="item.inset"
                            ></v-divider>

                            <v-list-item
                            v-else
                            :key="item.id"
                            >
                            <v-list-item-avatar>
                                <v-img :src="item.avatar"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title v-html="item.author"></v-list-item-title>
                                <p>{{ item.message }}</p>
                            </v-list-item-content>
                            </v-list-item>
                        </template>

                        <comment-form @sendComment="sendComment"></comment-form>

                    </v-list>
                </v-card>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters(['getArticle', 'articlesAreLoaded'])
    },
    data() {
        return {
            article: null
        }
    },
    mounted() {
        if (this.articlesAreLoaded) {
            this.article = this.getArticle(this.$route.params.id);
        }
    },
    watch: {
        articlesAreLoaded(newV) {
            if (newV === true && this.article === null) {
                this.article = this.getArticle(this.$route.params.id);
            }
        }
    },
    methods: {
        ...mapActions(['addComment']),
        sendComment(comment) {
            this.addComment({id: this.article.id, comment})
        }
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