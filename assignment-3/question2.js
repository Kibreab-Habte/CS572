

const EventEmitter = require('events');

class Gym extends EventEmitter {

    constructor(){
        super();
        setInterval(() => this.emit('boom'), 1000);
    }
}

const client = new Gym();
client.on('boom', () => console.log('Athlete is working out'))