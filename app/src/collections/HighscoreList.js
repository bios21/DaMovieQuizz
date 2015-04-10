;(function() {
    define(['jquery', 'backbone', 'underscore', 'models/Highscore', 'backbone.localStorage'], function ($, Backbone, _, Highscore, Store) {
        'use strict';

        var HighscoreList = Backbone.Collection.extend({
            model: Highscore,
            localStorage: new Backbone.LocalStorage('DaMovieQuizz'), //TODO:magicstring
            comparator: 'score'
        });

        return HighscoreList;
    });
})();