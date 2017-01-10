const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const path = require('path');
const del = require('del');
const runSequence = require('run-sequence');

const plugins = gulpLoadPlugins();

const paths = {
  all: ['./**/*.js', '!src/config/env/development.js', '!src/config/env/test.js', '!dist/**', '!test/**', '!node_modules/**', '!coverage/**',
        './package.json', './pm2.json', './.gitignore']
};

// Clean up dist and coverage directory
gulp.task('clean', () =>
  del(['dist/**', 'coverage/**', '!dist', '!coverage'])
);

// Copy non-js files to dist
gulp.task('copy', () =>
  gulp.src(paths.all)
    .pipe(plugins.newer('dist'))
    .pipe(gulp.dest('dist'))
);

// default task: clean dist and copy files
gulp.task('default', ['clean'], () => runSequence('copy'));
