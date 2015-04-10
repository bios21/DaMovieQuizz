;(function() {
    define(['jquery', 'backbone', 'underscore', 'models/Player'], function ($, Backbone, _, Player) {
        'use strict';

        var Highscore = Backbone.Model.extend({
            defaults: function() {
                return {
                    player: new Player(),
                    score: 0,
                    date: (new Date()).getTime()
                };
            }
        });

        return Highscore;
    });
})();