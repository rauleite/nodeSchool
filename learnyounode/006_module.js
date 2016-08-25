var fs = require('fs');
var path = require('path')

function mymodule (directoryName, extension, callback) {
    var listFiltered = [];

    fs.readdir(directoryName, function(err, list) {
        if(err) {
            callback(err);
            return;
        }
        
        listFiltered = list.filter(function (file) {
            return path.extname(file) === '.' + extension
        });

        callback(null, listFiltered);

    });
}

module.exports = mymodule;