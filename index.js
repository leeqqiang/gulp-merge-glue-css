
'use strict'
/*
 * https://github.com/teambition/gulp-mejs
 *
 * Licensed under the MIT license.
 */

var path = require('path');
var fs = require('fs');
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'gulp-merge-glue-css';

function mergeIconCss(iconCssPath) {
    return through.obj(function (file, enc, callback) {

        if (!iconCssPath) {
            return callback(new PluginError(PLUGIN_NAME, 'Missing icon css path!'));
        }

        if (file.isStream()) {
            return callback(new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
        }

        var filename = path.basename(file.path);
        var iconCssFilePath = path.join(iconCssPath, filename);

        var isExists = fs.existsSync(iconCssFilePath);

        if (isExists) {
            var iconCssBuffer = fs.readFileSync(iconCssFilePath);

            file.contents = Buffer.concat([iconCssBuffer, file.contents]);
        }

        this.push(file);

        callback();
    });
}

module.exports = mergeIconCss;