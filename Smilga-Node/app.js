// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const name = require('./04-names')
// const {john, peter} = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

sayHi('Susan')
sayHi(name.john)
sayHi(name.peter)

