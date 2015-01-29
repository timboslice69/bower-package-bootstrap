/**
 * Created by timothy on 27/11/14.
 */
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * JSHINT
		 */
		jshint: {
			options: {
				camelcase: true,
				curly: true,
				eqeqeq: true,
				eqnull: true,
				es3: false,
				forin: true,
				freeze: true,
				browser: true,
				indent: true,
				latedef: true,
				noarg: true,
				nonbsp: true,
				nonew: true,
				quotmark: true,
				undef: true,
				unused: false,
				globals: {
					jQuery: true,
					angular: true,
					console: true,
					$script: true
				},
				reporter: require("jshint-junit-reporter"),
				reporterOutput: "reports/jshint-junit-output.xml"
			},
			source: {
				options: {
					reporter: require("jshint-junit-reporter"),
					reporterOutput: "reports/jshint-junit-output.xml"
				}
			},
			uses_defaults: ['src/*.js']
		},

		/**
		 * COPY
		 */
		copy: {
			source: {
				files: [
					{expand: true, flatten: true, src: ['src/**/*.js'], dest: 'dist/'}
				]
			}
		},


		/**
		 * UGLIFY
		 */

		uglify: {
			source: {
				options: {
					sourceMap: true
				},
				files: [
					{
						expand: true,
						cwd: 'src',
						src: '**/*.js',
						dest: 'dist',
						ext: '.min.js'
					}
				]
			}
		},



		/** Unit Testing */
		jasmine: {
			basic: {
				src: 'src/**/*.js',
				options: {
					specs: 'spec/*.spec.js',
					//helpers: 'spec/*Helper.js',
					vendor: ["bower_components/**/*.min.js"],
					junit: {
						path: 'reports'
					}
				}
			}
		}


	});


	/**
	 * Load Grunt Tasks
	 */
	require('load-grunt-tasks')(grunt);

	/**
	 * Register Tasks
	 */

	// Build task will test, compile and uglify resources putting the output into the dist folder
	grunt.registerTask('default', [
		'jshint:source',
		'jasmine',
		'copy:source',
		'uglify:source'
	]);

	// Build task will test, compile and uglify resources putting the output into the dist folder
	grunt.registerTask('build', [
		'jshint:source',
		'jasmine',
		'copy:source',
		'uglify:source'
	]);


	// Tests the javascript quality and then runs the unit tests generating reports into the reports folder
	grunt.registerTask('test', [
		'jshint:source',
		'jasmine'
	]);

};