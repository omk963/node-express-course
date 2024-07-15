const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('response', (name, age) => {
    console.log(`${name} is ${age} years old`)
})

emitter.emit('response', 'Harry', 26);