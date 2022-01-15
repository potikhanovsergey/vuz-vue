export const state = () => ({
    articles: [],
    articlesAreLoaded: false,
})


export const mutations = {
    ADD_ARTICLES(state, payload) {
        state.articles = payload;
        state.articlesAreLoaded = true;
    },
}

export const actions = {
    fetchArticles({ commit }) {
        fetch('http://demo-api.vsdev.space/api/articles')
        .then((response) => response.json())
        .then((articles) => commit('ADD_ARTICLES', articles));
    },
}

export const getters = {
    getArticles(state) {
        return state.articles;
    },
    getSliderArticles(state) {
        return state.articles.filter(a => a.slider === true)
    },
    articlesAreLoaded(state) {
        return state.articlesAreLoaded;
    }
}