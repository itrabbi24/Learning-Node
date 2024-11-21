const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('birthday', (data) =>{
    console.log(data);
})

emitter.emit('birthday', 'happy birthday');