import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        featuresData: {},
        homeBannersData: {},
        newArrivalData: {},
        postsData: {},
        productCategoriesData: {},
        productsData: {},
        testimoniesData: {}
    },
    getters: {
        features: state => state.featuresData,
        homeBanners: state => state.homeBannersData,
        newArrivals: state => state.newArrivalData,
        posts: state => state.postsData,
        productCategories: state => state.productCategoriesData,
        products: state => state.productsData,
        testimonies: state => state.testimoniesData
    },
    mutations: {
        SET_FEATURES_DATA: (state, data) => {
            state.featuresData = data
        },
        SET_HOMEBANNER_DATA: (state, data) => {
            state.homeBannersData = data
        },
        SET_NEWARRIVAL_DATA: (state, data) => {
            state.newArrivalData = data
        },
        SET_POSTS_DATA: (state, data) => {
            state.postsData = data
        },
        SET_PRODUCTCATEGORIES_DATA: (state, data) => {
            state.productCategoriesData = data
        },
        SET_PRODUCTS_DATA: (state, data) => {
            state.productsData = data
        },
        SET_TESTIMONIES_DATA: (state, data) => {
            state.testimoniesData = data
        }
    },
    actions: {
        getFeaturesData ({commit}) {
            axios.get('http://mitworks.my.id/api/features')
            .then(res => {
                commit('SET_FEATURES_DATA', res.data)
            }).catch((err) => {
                alert(err.response?.data?.message)
            })
        },
        getHomeBannersData ({commit}) {
            axios.get('http://mitworks.my.id/api/homebanner')
            .then(res => {
                commit('SET_HOMEBANNER_DATA', res.data)
            }).catch((err) => {
                alert(err.response?.data?.message)
            })
        },
        getNewArrivalData ({commit}) {
            axios.get('http://mitworks.my.id/api/new_arrival')
            .then(res => {
                commit('SET_NEWARRIVAL_DATA', res.data)
            }).catch((err) => {
                alert(err.response?.data?.message)
            })
        },
        getProductCategoriesData ({commit}) {
            axios.get('http://mitworks.my.id/api/product_category')
            .then(res => {
                commit('SET_PRODUCTCATEGORIES_DATA', res.data)
            }).catch((err) => {
                alert(err.response?.data?.message)
            })
        },
        getTestimoniesData ({commit}) {
            axios.get('http://mitworks.my.id/api/testimony')
            .then(res => {
                commit('SET_TESTIMONIES_DATA', res.data)
            }).catch((err) => {
                alert(err.response?.data?.message)
            })
        },
        getPostsData ({commit}) {
            axios.get('http://mitworks.my.id/api/posts')
            .then(res => {
                commit('SET_POSTS_DATA', res.data)
            }).catch((err) => {
                alert(err.response?.data?.message)
            })
        }
    }
})