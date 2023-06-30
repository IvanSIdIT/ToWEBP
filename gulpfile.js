const { src, dest } = require("gulp");
const webp = require("gulp-webp");
//Main function

function images() {
  return src(["app/src/*.*"]).pipe(webp()).pipe(dest("app/dest"));
}

exports.images = images;
