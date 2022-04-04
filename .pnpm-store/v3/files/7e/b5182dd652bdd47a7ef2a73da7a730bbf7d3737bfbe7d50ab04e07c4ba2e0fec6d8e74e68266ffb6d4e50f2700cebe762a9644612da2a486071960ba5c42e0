(function() {
	'use strict';

	var gulp =		require('gulp'),
			fs = 			require('fs'),
			pkg = 		require('./package.json'),
			open =		require('gulp-open'),
			jshint =	require('gulp-jshint'),
			clean =		require('gulp-clean'),
			uglify =	require('gulp-uglify'),
			rename =	require('gulp-rename'),
			header =	require('gulp-header'),
			extend = 	require('lodash.assign');

	var srcPath = 'src/cint.js',
			destPath = './',
			docsPath = 'docs';

	gulp.task('default', ['clean'], function() {

		var buildPackage = extend(pkg, { buildtime: (new Date()).toUTCString() });
		var headerTemplate = fs.readFileSync('header.ejs');

		gulp.src(srcPath)
			.pipe(jshint('.jshintrc'))
			.pipe(jshint.reporter('jshint-stylish'))
			.pipe(jshint.reporter('fail'))
			.pipe(header(headerTemplate, buildPackage))
	    .pipe(gulp.dest(destPath))
	    .pipe(uglify())
			.pipe(header(headerTemplate, buildPackage))
	    .pipe(rename({ suffix: '.min' }))
	    .pipe(gulp.dest(destPath))
	});

	gulp.task('clean', function() {
	  gulp.src(['docs'], {read: false})
	    .pipe(clean({force:true}));
	});

})();
