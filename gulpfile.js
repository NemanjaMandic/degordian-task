

// Style related.
var styleSRC                = './static/scss/style.scss'; // Path to main .scss file.
var styleDestination        = './static/dist/css/'; // Path to place the compiled CSS file.

// JS Vendor related.
var jsVendorSRC             = './static/js/vendor/*.js'; // Path to JS vendor folder.
var jsVendorDestination     = './static/dist/js/'; // Path to place the compiled JS vendors file.
var jsVendorFile            = 'vendors'; // Compiled JS vendors file name.
// Default set to vendors i.e. vendors.js.

// JS Custom related.
var jsCustomSRC             = './static/js/*.js'; // Path to JS custom scripts folder.
var jsCustomDestination     = './static/dist/js/'; // Path to place the compiled JS custom scripts file.
var jsCustomFile            = 'custom'; // Compiled JS custom file name.
// Default set to custom i.e. custom.js.

// Images related.
var imagesSRC               = './static/img/raw/**/*.svg'; // Source folder of images which should be optimized.
var imagesDestination       = './static/img/'; // Destination folder of optimized images. Must be different from the imagesSRC folder.

// Watch files paths.
var styleWatchFiles         = './static/scss/**/*.scss'; // Path to all *.scss files inside css folder and inside them.
var vendorJSWatchFiles      = './static/js/vendor/*.js'; // Path to all vendor JS files.
var customJSWatchFiles      = './static/js/*.js'; // Path to all custom JS files.



var gulp         = require('gulp'); // Gulp of-course

// CSS related plugins.
var sass         = require('gulp-sass'); // Gulp pluign for Sass compilation.
var minifyCss    = require('gulp-uglifycss'); // Minifies CSS files.
var autoprefixer = require('gulp-autoprefixer'); // Autoprefixing magic.
var mmq          = require('gulp-merge-media-queries'); // Combine matching media queries into one media query definition.

// JS related plugins.
var concat       = require('gulp-concat'); // Concatenates JS files
var uglify       = require('gulp-uglify'); // Minifies JS files

// Image related plugins.
var imagemin     = require('gulp-imagemin'); // Minify PNG, JPEG, GIF and SVG images with imagemin.

// Utility related plugins.
var rename       = require('gulp-rename'); // Renames files E.g. style.css -> style.min.css
var notify       = require('gulp-notify');

var sourcemaps   = require('gulp-sourcemaps');

gulp.task('styles', function(){
    gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass({
          errLogToConsole: true,
          outputStyle: 'compact',
          precision: 10
        }).on('error', sass.logError))
        .pipe( sourcemaps.write( { includeContent: false } ) )
        .pipe( sourcemaps.init( { loadMaps: true } ) )
        .pipe( sourcemaps.write ( './' ) )
        .pipe( mmq( { log: true } ) )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe(minifyCss())
        .pipe(gulp.dest(styleDestination))
        .pipe( notify( { message: 'TASK: "styles" Completed! 💯', onLast: true } ) )
});

gulp.task( 'vendorsJs', function() {
  gulp.src( jsVendorSRC )
    .pipe( concat( jsVendorFile + '.js' ) )
    .pipe( gulp.dest( jsVendorDestination ) )
    .pipe( rename( {
      basename: jsVendorFile,
      suffix: '.min'
    }))
    .pipe( uglify() )
    .pipe( gulp.dest( jsVendorDestination ) )
    .pipe( notify( { message: 'TASK: "vendorsJs" Completed! 💯', onLast: true } ) );
});

gulp.task( 'customJS', function() {
    gulp.src( jsCustomSRC )
        .pipe( concat( jsCustomFile + '.js' ) )
        .pipe( gulp.dest( jsCustomDestination ) )
        .pipe( rename( {
          basename: jsCustomFile,
          suffix: '.min'
        }))
        .pipe( uglify() )
        .pipe( gulp.dest( jsCustomDestination ) )
        .pipe( notify( { message: 'TASK: "customJs" Completed! 💯', onLast: true } ) );
 });

gulp.task( 'images', function() {
  gulp.src( imagesSRC )
    .pipe( imagemin( {
          progressive: true,
          optimizationLevel: 3, // 0-7 low-high
          interlaced: true,
          svgoPlugins: [{removeViewBox: false}]
        } ) )
    .pipe(gulp.dest( imagesDestination ))
    .pipe( notify( { message: 'TASK: "images" Completed! 💯', onLast: true } ) );
 });


 gulp.task( 'default', ['styles', 'vendorsJs', 'customJS', 'images'], function () {
 
   gulp.watch( styleWatchFiles, [ 'styles' ] ); 
   gulp.watch( vendorJSWatchFiles, [ 'vendorsJs' ] ); 
   gulp.watch( customJSWatchFiles, [ 'customJS' ] ); 
 
 });
