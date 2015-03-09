module.exports = function(grunt){
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  jshint: {
    options: {
      node: true, 
      jasmine: true
    },
    all: [
    'Gruntfile.js', 
    './src/**/*.js',
    './spec/**/*.js'
    ]
  },
  jasmine_node: {
    options: {
      forceExit: true, 
    }, 
    all: ['test/unitTests/']
  },
  express: {
    options:{},
    dev: {
      options: {
        script: './server.js'
      }
    }
  },
  mochaTest: {
    test: {
      options: {
        reporter: 'nyan',
        quiet: false
      },
    src: ['test/acceptanceTests/*.js']
    }
  },
  watch: {
    files: [ 
    './src/**/*.js',
    './test/**/*.js',
    './views/*.ejs',
    './public/**/*.js'
    ], 
    tasks: ['jasmine_node', 'express', 'mochaTest', 'jshint']
  }
});

grunt.loadNpmTasks('grunt-mocha-test');
grunt.loadNpmTasks('grunt-express-server');
grunt.loadNpmTasks('grunt-jasmine-node');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('mocha',['express','mochaTest']);
grunt.registerTask('jasmine', ['jasmine_node']);

}