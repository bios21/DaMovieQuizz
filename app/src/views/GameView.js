;(function() {
    define(['jquery', 'backbone', 'underscore', 'text!templates/game.html'], function ($, Backbone, _, tplGame) {
        'use strict';

        var GameView = Backbone.View.extend({
            tagName: 'div',
            template: _.template(tplGame),

            initialize: function() {

            },

            render: function() {

            }
        });

        return GameView;
    });
})();