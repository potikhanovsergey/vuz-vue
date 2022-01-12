export const state = () => ({
    articles: [],
    articlesAreLoaded: false,
})


export const mutations = {
    ADD_ARTICLES(state, payload) {
        state.articles = payload;
        state.articlesAreLoaded = true;
    },
    ADD_COMMENT(state, {id, comment}) {
        console.log(id, state.articles.find(a => a.id == id))
        state.articles.find(a => a.id == id).comments.push(comment)
    }
}

export const actions = {
    fetchArticles({ commit }) {
        fetch('http://localhost:3000/articles.json')
        .then((response) => response.json())
        .then((articles) => commit('ADD_ARTICLES', articles));
    },
    addComment({ commit }, payload) {
        commit('ADD_COMMENT', payload)
    }
}

export const getters = {
    getArticles(state) {
        return state.articles;
    },
    getSliderArticles(state) {
        return state.articles.filter(a => a.slider === true)
    },
    getArticle: (state) => (id) => {
        return state.articles[id - 1]
    },
    articlesAreLoaded(state) {
        return state.articlesAreLoaded;
    }
}