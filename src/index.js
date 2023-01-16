// если экспорт был именованный, то при импорте указываются точные названия и используются синтаксис с {}
import { APP_VERSION, DEVELOPER } from './constants.js'

// ❌ такая запись не верна
// import APP_VERSION, DEVELOPER from './constants'

// можно давать любое имя при импорте, если экспорт был по умолчанию
import theBestFunction from './function.js'

console.log(theBestFunction());

console.log(APP_VERSION, DEVELOPER);

import functions from './arrays.js';
console.log(functions.firstElement([1,2]))
console.log(functions.lastElement([3,4]))

import { add } from './math.js';
console.log(add(1, 2))

import { div } from './math.js';
console.log(div(3, 3))