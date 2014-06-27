
module.exports = function (grunt) {
    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-bower-install-simple");

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
        }
    });

    grunt.registerTask("prepare", [
        "bower-install-simple"
    ]);

    grunt.registerTask('build', [
        'less'
    ]);

    grunt.registerTask('default', [
        'prepare',
        'build'
    ]);
};