const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss'); // Para usar PostCSS
const autoprefixer = require('autoprefixer'); // Autoprefixer correto para PostCSS
const browserSync = require('browser-sync').create()

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

gulp.task('default', compilaSass);


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
    gulp.watch('*.html').on('change', browserSync.reload)
}

gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync'));