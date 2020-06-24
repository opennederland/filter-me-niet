const { src, dest, parallel, series, watch: gulpWatch } = require("gulp");

const autoprefixer = require("autoprefixer");
const babelify = require("babelify");
const browserify = require("browserify");
const cssnano = require("cssnano");
const del = require("del");
const cssimport = require("postcss-import");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");
const vinylSourceStream = require("vinyl-source-stream");
const vinylBuffer = require("vinyl-buffer");

sass.compiler = require("node-sass");

const clean = () => {
  return del(["dist/**", "!dist"]);
};

const images = () => {
  return src("src/images/**/*").pipe(dest("dist/images"));
};

const css = () => {
  return src("src/css/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      postcss([
        cssimport(),
        autoprefixer({
          grid: "autoplace",
        }),
        cssnano({
          preset: [
            "default",
            {
              calc: false,
            },
          ],
        }),
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"));
};

const js = () => {
  return browserify({
    entries: ["src/js/main.js"],
    debug: false,
  })
    .transform(
      babelify.configure({
        presets: ["@babel/preset-env"],
      })
    )
    .bundle()
    .pipe(vinylSourceStream("main.js"))
    .pipe(vinylBuffer())
    .pipe(terser())
    .pipe(dest("dist/js"));
};

const watch = () => {
  gulpWatch("src/css", css);
  gulpWatch("src/js", js);
  gulpWatch("src/image", images);
};

exports.images = images;
exports.css = css;
exports.js = js;
exports.default = series(clean, parallel(css, js, images), watch);
