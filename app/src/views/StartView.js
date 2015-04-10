;(function() {
    define(['jquery', 'backbone', 'underscore', 'text!templates/start_end.html'], function ($, Backbone, _, tplStart) {
        'use strict';

        var StartView = Backbone.View.extend({
            tagName: 'div',
            template: _.template(tplStart),

            initialize: function() {

            },

            render: function() {

            }
        });

        return StartView;
    });
})();