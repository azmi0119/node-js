// console.log("Hello abdullah");
// console.log(__dirname);	// current directory
// console.log(__filename); // current file
// console.log(module); // Current module

const path = require("path");
// console.log(path.basename("f:/node/ch1/index.js"));
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
// console.log(path.basename(__filename, '.js'))
// console.log(path.extname(__filename))

// console.log(path.join('/search', 'lable', 'course/pyton', 'oop'))
// console.log(path.join('/search', 'lable', 'course/pyton', 'oop','..'))
// console.log(path.normalize('c:\\temp\\\\foo\\bar'))
// console.log(path.parse(__filename))
// console.log(path.parse(__filename).base)
// console.log(path.parse(__filename).name)

console.log(path.isAbsolute('//server'))
console.log(path.isAbsolute('\\server'))
console.log(path.isAbsolute('c:/foo/..'))
console.log(path.isAbsolute('bar/baz'))




