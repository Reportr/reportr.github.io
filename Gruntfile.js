
module.exports = function (grunt) {
    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-bower-install-simple");
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Init GRUNT configuraton
    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        'bower-install-simple': {
            options: {
                color:       true,
                production:  false,
                directory:   "bower_components"
            }
        },
        'less': {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "assets/css/style.css": "less/main.less"
                }
            }
        },
        'copy': {
            main: {
                files: [
                    {
                        expand : true,
                        cwd: './bower_components/octicons/octicons',
                        src: ['**'],
                        dest: './assets/octicons'
                    }
                ]
            }
        }
    });

    grunt.registerTask("prepare", [
        "bower-install-simple"
    ]);

    grunt.registerTask('build', [
        'less',
        'copy:main'
    ]);

    grunt.registerTask('default', [
        'prepare',
        'build'
    ]);
};