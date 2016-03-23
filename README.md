# gulp-merge-glue-css
---

merge glue icon css and the same name page css into each file

## Install

```
npm i gulp-merge-glue-css --save-dev
```

## Usage

structure example:

```
	- build
		- page-css
			- home.css
			- audit.css
		- icon-css
			- home.css
			- audit.css
```

```
var mergeIconCss = require('gulp-merge-glue-css');

gulp.src('build/page-css/**/*.css')
    .pipe(mergeIconCss('build/icon-css'))
    .pipe(gulp.dest(cssDirPath));
```
