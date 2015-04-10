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
                files: ['<%= _static.src %>/**/*.js'],
                tasks: ['jshint', 'requirejs']
            },
            templates: {
                files: ['<%= _static.src %>/templates/*'],
                tasks: ['copy:templates']
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            base: {
                tasks: ['concurrent:sources', 'concurrent:config']
            },
            sources: {
                tasks: ['watch:src', 'watch:templates']
            },
            config: {
                tasks: ['watch:gruntfile']
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
        },
        copy: {
            templates: {
                files: [
                    {expand: true, cwd: '<%= _static.src %>/templates/', src: ['**'], dest: '<%= _static.dist %>/templates/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('doRequireStuff', ['bowerRequirejs', 'requirejs', 'uglify', 'copy']);

    grunt.registerTask('default', ['jshint', 'doRequireStuff']);
};