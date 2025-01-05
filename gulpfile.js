const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss'); // Para usar PostCSS
const autoprefixer = require('autoprefixer'); // Autoprefixer correto para PostCSS
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


const compilaSass = () => {
    return gulp.src('scss/*.scss')
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError)) // Corrigido o style para outputStyle
        .pipe(postcss([autoprefixer({
            overrideBrowserslist: ['last 2 versions', '> 1%', 'IE 11']
        })
    ])) // Autoprefixer para PostCSS
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream())
};
gulp.task('sass', compilaSass);


const pluginsCSS = () => {
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
}
gulp.task('pluginscss', pluginsCSS)

const gulpJs = () => {
    return gulp.src('js/scripts/*.js')
    .pipe(concat('index.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())
}
gulp.task('alljs', gulpJs)

const pluginsJs = () => {
    return gulp
    .src(['./js/lib/aos.min.js', './js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())
}
gulp.task('pluginsjs', pluginsJs)

const browser = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}
gulp.task('browser-sync', browser);

const watch = () => {
    gulp.watch('scss/*.scss', compilaSass);
    gulp.watch('css/lib/*.css', pluginsCSS)
    gulp.watch('*.html').on('change', browserSync.reload)
    gulp.watch('js/scripts/*', gulpJs)
    gulp.watch('js/lib/*.js', pluginsJs)
}
gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'pluginscss', 'sass', 'alljs', 'pluginsjs'));