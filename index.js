const mongoose = require('mongoose');
const assert = require('node:assert');

mongoose.model('Cat', { name: String });

console.log('Models are the same?', mongoose.model('Cat') === mongoose.model('Cat'));

assert.deepStrictEqual(mongoose.model('Cat'), mongoose.model('Cat'));
