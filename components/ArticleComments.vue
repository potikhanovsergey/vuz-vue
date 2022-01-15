<template>
    <v-skeleton-loader v-if="isLoading"
      max-width="700"
      type="card"
    ></v-skeleton-loader>
    <v-list three-line class="pl-3" v-else>
        <h3 class="text-h3">Комментарии</h3>
        <template v-for="(item) in comments">
            <v-subheader
                :key="item.user_name + item.id"
                v-text="item.user_name"
            ></v-subheader>

            <v-list-item
            :key="item.id"
            >
            <v-list-item-avatar>
                <v-img :src="`https://eu.ui-avatars.com/api/?name=${item.user_name}`"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-html="item.user_name"></v-list-item-title>
                <p>{{ item.comment }}</p>
            </v-list-item-content>
            </v-list-item>
        </template>
        <comment-form @new-comment="handleNewComment" />
    </v-list>
    
</template>
<script>
export default {
    data() {
        return {
            comments: null,
            isLoading: null
        }
    },
    created() {
        this.isLoading = true;
        fetch(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}/comments`)
        .then(response => response.json())
        .then(comments => {
            this.comments = comments;
            this.isLoading = false;
        })
        .catch(e => console.log(e))
    },
    methods: {
        handleNewComment(comment) {
            this.comments.push(comment);
        }
    }
}
</script>