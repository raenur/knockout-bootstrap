module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                options: {
                    sourceMap: true
                },
                files: {
                    'src/styles/styles.css': 'src/styles/styles.less'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['src/styles/*.less'],
                tasks: ['less']
            },
            other: {
                files: ['src/*.html','src/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.registerTask('less');
};