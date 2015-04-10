;(function() {
    define([
        'jquery',
        'backbone',
        'underscore',
        'models/Player',
        'models/Highscore',
        'routers/TheRouter'
    ], function ($, Backbone, _, Player, Highscore, TheRouter) {
        'use strict';

        var router = new TheRouter();
        Backbone.history.start();
    });
})();