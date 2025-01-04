const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss'); // Para usar PostCSS
const autoprefixer = require('autoprefixer'); // Autoprefixer correto para PostCSS

const compilaSass = () => {
    return gulp.src('scss/*.scss')
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError)) // Corrigido o style para outputStyle
        .pipe(postcss([autoprefixer({
            overrideBrowserslist: ['last 2 versions', '> 1%', 'IE 11']
        })
    ])) // Autoprefixer para PostCSS
        .pipe(gulp.dest('css/'));
};

gulp.task('default', compilaSass);
