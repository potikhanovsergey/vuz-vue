<template>
    <div class="article">
        <h1>{{ params.name }}</h1>
        <span>{{ params.date }}</span>
        <p>{{ params.desc }}</p>
    </div>
</template>

<script>

export default {
    asyncData({ params }) {
        return {
            params
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