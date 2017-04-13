var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');

var tsProject = ts.createProject("tsconfig.json");

gulp.task('default', function () {
  var tsResult = tsProject.src()
    .pipe(tsProject());
  return merge([
    tsResult.js.pipe(gulp.dest('build'))
  ]);
});
