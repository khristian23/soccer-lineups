import Consts from 'src/util/constants'

const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [{
            path: '',
            name: Consts.routes.home,
            component: () => import('pages/Index.vue')
        }, {
            path: '/players',
            name: Consts.routes.players,
            component: () => import('pages/Players.vue')
        }, {
            path: '/players/:id',
            name: Consts.routes.player,
            component: () => import('pages/Player.vue'),
            props: true
        }, {
            path: '/matches',
            name: Consts.routes.games,
            component: () => import('pages/Matches.vue')
        }, {
            path: '/matches/:id',
            name: Consts.routes.game,
            component: () => import('pages/Match.vue'),
            props: true
        }]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes
