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
        },
        {
            path: '/bgs/',
            url: 'pages/bgs.html',
            
        },
        {
            path: '/songs/',
            url: 'pages/songs.html',
        },
        {
            path: '/books/',
            url: 'pages/books.html',
        },
        {
            path: '/movies/',
            url: 'pages/movies.html',
        },
        {
            path: '(.*)',
            url: 'pages/404.html',
        }
    ],
});

var mainView = app.views.create('.view-main');