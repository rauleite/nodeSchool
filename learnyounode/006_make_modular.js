//  fs.readdir(process.argv[2], function(err, list) {
//         if(err) return;
        
//         list.forEach(function (file) {
//             if (path.extname(file) === '.' + process.argv[3])
//             console.log(file)
//         });
//     });

var mymodule = require('./006_module');

mymodule(process.argv[2], process.argv[3], function(err, listFiltered) {
    if(err) {
        return console.error(err);
    }
    listFiltered.forEach(function(file) {   
        console.log(file);
    });
});
