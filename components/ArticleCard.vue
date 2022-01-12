<template>
    <li>
        <v-card
            class="mx-auto"
            max-width="344"
        >
            <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            ></v-img>

            <v-card-title>
                {{ art.name }}
            </v-card-title>

            <v-card-subtitle>
                {{ art.shortDesc }}
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
                :to="{name: 'articles-id', params: art}">
                Открыть статью
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

        </v-card>
    </li>
</template>

<script>
export default {
    props: ['art'],
    data() {
        return {
            show: false
        }
    }
}
</script>

<style>

</style>