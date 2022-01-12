<template>
    <v-list-item>
        <v-textarea
            v-model="message"
            label="Комментарий"
            no-resize
            rows="1"
        ></v-textarea>
        <v-spacer/>
        <v-btn 
        @click="sendComment">
        Отправить</v-btn>
    </v-list-item>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        sendComment() {
            this.$emit('sendComment', 
                {
                    message: this.message, 
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    author: 'Test Author',
                    id: new Date().toISOString()
                })
            this.message = '';
        }
    }
}
</script>

<style>

</style>