// Common JS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative.js')
console.log(data)

require('./mind-grenade')
sayHi('NKJ')
sayHi(names.Om)
sayHi(names.Preet)