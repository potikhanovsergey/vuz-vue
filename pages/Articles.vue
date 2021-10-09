<template>
    <div>
        <h1>Articles</h1>
        <ul>
            <li v-for="art in articles" :key="art.id">
                <router-link :to="{name: 'Article', params: {id: art.id, name: art.name, date: art.date, desc: art.desc}}">
                    <h2>{{ art.name }}</h2>
                    <span>{{ art.date }}</span>
                    <p>{{ art.desc }}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData() {
        const response = await fetch('http://localhost:3000/articles.json');
        let articles = await response.json();
        return {
            articles
        }
    },

}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        max-width: 75%;
        margin: 0 auto;
        align-items: center;
        gap: 15px;
    }

    li {
        display: inline-flex;
        flex-direction: column;
        gap: 10px;
        max-width: 500px;
        width: 100%;
        border-radius: 12px;
        align-items: center;
        transition: .4s ease all;
        padding: 10px;
        cursor: pointer;
        background-color: #f3f3f3;
    }

    a {
        color: black;
        text-decoration: none;
    }

    li:hover {
        background-color: transparent;
    }

    
    h2 {
        font-size: 1.2rem;
    }

    img {
        width: 240px;
        height: 190px;
    }
</style>