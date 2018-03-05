import Vue from 'vue'
import Router from 'vue-router'
import MovieShow from '@/components/movie-show/movie-show'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'MovieShow',
        component: MovieShow
    }]
})