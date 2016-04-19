var gulp = require('gulp'),
    concat = require('gulp-concat'),
    imageMin = require('gulp-imagemin'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify');
    
gulp.task('default', ['pages','image','script','index','comboSass','sass','watch']);

gulp.task('watch', function () {
    gulp.watch('client/styles/scss/*scss', ['comboSass','sass']);
    gulp.watch('client/views/index.html', ['index']);
    gulp.watch('client/views/pages/*.html', ['pages']);
    gulp.watch('client/scripts/*.js', ['script']);
});

gulp.task('comboSass', function () {
   return gulp.src('client/styles/scss/*.scss')
          .pipe(concat('style.scss'))
          .pipe(gulp.dest('client/styles/')); 
});

gulp.task('sass', function (){
   return sass('client/styles/style.scss')
          .pipe(gulp.dest('server/public/styles/'));
});

gulp.task('index', function () {
   return gulp.src('client/views/index.html')
          .pipe(gulp.dest('server/public/')); 
});

gulp.task('script',function () {
    return gulp.src('client/scripts/*.js')
           // .pipe(uglify())
           .pipe(gulp.dest('server/public/scripts/'));
});

gulp.task('image', function () {
   return gulp.src('client/views/images/*.*')
          .pipe(imageMin())
          .pipe(gulp.dest('server/public/views/images/')); 
});

gulp.task('pages', function(){
   return gulp.src('client/views/pages/*.html')
          .pipe(gulp.dest('server/public/views/pages/')); 
});