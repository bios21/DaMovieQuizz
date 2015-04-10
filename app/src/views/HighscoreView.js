;(function() {
    define(['jquery', 'backbone', 'underscore', 'models/Highscore', 'text!templates/highscore.html'], function ($, Backbone, _, Highscore, tplHighscore) {
        'use strict';

        var HighscoreView = Backbone.View.extend({
            tagName: 'div',
            template: _.template(tplHighscore),

            initialize: function() {

            },

            render: function() {

            }
        });

        return HighscoreView;
    });
})();