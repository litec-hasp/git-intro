const gulp = require('gulp');
const del = require('del');
const path = require('path');
const ssi = require('gulp-ssi');
const merge = require('merge-stream');
const lec = require('gulp-line-ending-corrector');

gulp.task('clean', () => {
  return del(['dist/**']);
});

gulp.task('copy-reveal', async () => {
    const rbase = 'node_modules/reveal.js';
    gulp.src(
            [
            path.join(rbase, 'css/**/*.css'), 
            path.join(rbase, 'js/**/*.js'),
            path.join(rbase, 'lib/**/*'), 
            path.join(rbase, 'plugin/**/*')
            ],
            {base: rbase})
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-jquery', async () => {
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-presentation', async () => {
    const html = gulp.src('*.html').pipe(ssi()).pipe(gulp.dest('dist'));
    const css = gulp.src('*.css').pipe(gulp.dest('dist/css'));
    const headers = gulp.src(['headers.js']).pipe(gulp.dest('dist/js'));
    const images = gulp.src('img/**/*').pipe(gulp.dest('dist/img'));
    const md = gulp.src(['*.md', '!README.md']).pipe(ssi()).pipe(lec()).pipe(gulp.dest('dist'));
    return merge(html, css, headers, images, md);
});

gulp.task('default', gulp.parallel('copy-presentation', 'copy-reveal', 'copy-jquery'));


gulp.task('watch', gulp.series('default'), () => {
    gulp.watch(
        ['*.html', '*.css', 'headers.js', 'img/**/*', '*.md'], gulp.series('default'));
});