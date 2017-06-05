const routes = [
    {
        path: '/',
        component: require("./components/nav.vue"),
        children: [
            {
                //登录页面
                name: 'login',
                path: '/login',
                component: require("./components/login.vue")
            },
            {
                //购物车页面
                name: 'cart',
                path: '/cart',
                component: require("./components/cart.vue"),
                meta: { requiresAuth: true }
            },
            {
                //用户信息页面
                name: 'info',
                path: '/info',
                component: require("./components/info.vue"),
                meta: { requiresAuth: true }
            },
        ]
    },
];


export default routes;






