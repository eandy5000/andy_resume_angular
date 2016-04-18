var gulp = require('gulp'),
    concat = require('gulp-concat'),
    imageMin = require('gulp-imagemin'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify');
    
gulp.task('default', []);

gulp.task('watch', function () {
    gulp.watch('client/styles/scss/*scss',['comboSass']);
});

gulp.task('comboSass', function () {
   return gulp.src('client/styles/scss/*.scss')
          .pipe(concat('style.scss'))
          .pipe(gulp.dest('client/styles/')); 
});

gulp.task('sass', function (){
   return sass('client/styles/style.scss');
   // change when config public 
});