;(function() {
    define(['jquery', 'backbone', 'underscore', 'text!templates/start_end.html'], function ($, Backbone, _, tplEnd) {
        'use strict';

        var EndView = Backbone.View.extend({
            tagName: 'div',
            template: _.template(tplEnd),

            initialize: function() {

            },

            render: function() {

            }
        });

        return EndView;
    });
})();