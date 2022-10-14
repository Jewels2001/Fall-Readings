var app = new Framework7({
    el: '#app',

    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
        {
            path: '/about/',
            url: 'pages/about.html',
        }
    ],
});

var mainView = app.views.create('.view-main');