module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        _static: {
            baseUrl: 'app',
            src: '<%= _static.baseUrl %>/src',
            dist: '<%= _static.baseUrl %>/dist'
        },
        jshint: {
            files: ['Gruntfile.js', '<%= _static.src %>/*.js']
        },
        watch: {
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['jshint', 'watch:gruntfile']
            },
            src: {
                files: ['<%= _static.src %>/*.js'],
                tasks: ['jshint', 'requirejs']
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            config: {
                tasks: ['watch:gruntfile']
            },
            source: {
                tasks: ['watch:src']
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: '<%= _static.src %>',
                    mainConfigFile: '<%= _static.src %>/config.js',
                    name: '<%= pkg.name %>',
                    out: '<%= _static.dist %>/<%= pkg.name %>.js'
                }
            }
        },
        bowerRequirejs: {
            target: {
                rjsConfig: '<%= _static.src %>/config.js'
            }
        },
        uglify: {
            requirejs: {
                files: {
                    '<%= _static.dist %>/require.js': ['<%= _static.src %>/lib/requirejs/require.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('doRequireStuff', ['bowerRequirejs', 'requirejs', 'uglify']);

    grunt.registerTask('default', ['jshint', 'doRequireStuff']);
};