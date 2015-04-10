;(function() {
    define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _) {
        'use strict';

        var Player = Backbone.Model.extend({
            defaults: function() {
                return {
                    name: 'Player',
                    highScore: 0,
                    currentScore: 0
                };
            },

            /**
             * @param {int} add
             */
            saveHighScore: function(hs) {
                this.save({highScore: hs});
            },

            resetHighScore: function() {
                this.save({highScore: 0})
            }
        });

        return Player;
    });
})();