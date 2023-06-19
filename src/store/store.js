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
            axios.get('http://127.0.0.1:8000/api/features')
            .then(res => {
                commit('SET_FEATURES_DATA', res.data)
            }).catch((err) => {
                alert(err.response?.data?.message)
            })
        }
    }
})