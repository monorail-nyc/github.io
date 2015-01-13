module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/monorail.css' : 'source/sass/monorail.scss'
				}
			}
		},
		concat: {   
			dist: {
				src: ['source/js/main.js'],
				dest: 'js/main.js'
			}
		},
		uglify: {
			build: {
				src: 'js/main.js',
				dest: 'js/main.min.js'
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			scripts: {
				files:'source/js/*.js',
				tasks:['concat','uglify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default',['concat','uglify']);
}
