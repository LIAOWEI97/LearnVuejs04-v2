// commonJS规范
const {add, mul} = require('./mathUtils')

console.log(add(20, 30))
console.log(mul(20, 30))

// ES6规范
import {name, age, height} from "./info"

console.log(name)
console.log(age)
console.log(height)