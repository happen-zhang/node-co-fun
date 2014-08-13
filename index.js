
var fs = require('fs');

var co = require('./co.js');

var readFile = function(file) {
    return function(callback) {
        fs.readFile(file, 'utf8', callback);
    };
};

co(function *() {
    var files = [
        'co.js',
        'README.md'
    ];

    var cnt1 = yield readFile(files[0]);
    var cnt2 = yield readFile(files[1]);

    console.log(cnt1);
    console.log(cnt2);

    return 'done';
})(function(err, result) {
    if (err) {
        return console.log(err);
    }

    console.log(result);
});
