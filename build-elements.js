var concat = require('concat');

const files = [
    './dist/angular-elements-starterkit/runtime.js',
    './dist/angular-elements-starterkit/polyfills.js',
    './dist/angular-elements-starterkit/scripts.js',
    './dist/angular-elements-starterkit/main.js'
]

concat(files, './dist/angular-elements-starterkit/custom-elements.js')