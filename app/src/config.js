requirejs.config({
    paths: {
        backbone: "lib/backbone/backbone",
        jquery: "lib/jquery/dist/jquery",
        requirejs: "lib/requirejs/require",
        text: "lib/requirejs-text/text",
        underscore: "lib/underscore/underscore",
        "backbone.localStorage": "lib/backbone.localStorage/backbone.localStorage",
        "models/Player": "models/Player",
        "models/Highscore": "models/Highscore",
        "views/EndView": "views/EndView",
        "views/GameView": "views/GameView",
        "views/HighscoreView": "views/HighscoreView",
        "views/StartView": "views/StartView",
        "collections/HighscoreList": "collections/HighscoreList",
        "routers/TheRouter": "routers/TheRouter",
        DaMovieQuizz: "DaMovieQuizz",
        "requirejs-text": "lib/requirejs-text/text"
    },
    shim: {
        "backbone.localStorage": {
            deps: [
                "backbone"
            ],
            exports: "Backbone.LocalStorage"
        }
    },
    packages: [

    ]
});