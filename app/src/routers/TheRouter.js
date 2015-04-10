;(function() {
    define([
        'jquery',
        'backbone',
        'underscore',
        'views/EndView',
        'views/GameView',
        'views/HighscoreView',
        'views/StartView'
    ], function ($, Backbone, _, EndView, GameView, HighscoreView, StartView) {
        'use strict';

        var TheRouter = Backbone.Router.extend({
            routes: {
                'play': 'game',
                'highscore': 'highscore',
                'round': 'round'
            },

            initialize: function(options) {
                this.view = new StartView();
            },

            game: function(az) {
                console.log(new GameView());
            },

            highscore: function() {
                console.log(new HighscoreView())
            },

            round: function() {
                console.log('round');
            }
        });

        return TheRouter;
    });
})();