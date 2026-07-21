const { EventEmitter } = require('events');

const sayHi = (name) => {
    console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.once('greet', () => {
    console.log('system started');
});

task.on('greet', sayHi);

task.on('greet', (name) => {
    console.log(`${name} start working`);
});

task.on('greet', (name) => {
    console.log(`${name} logged out`);
});

task.once('exit', (name) => {
    console.log(`system shutdown by ${name}`);
});

task.emit('greet', 'Rahul Singh');
console.log();

task.off('greet', sayHi);

task.emit('greet', 'Manish Sinha');
console.log();

task.emit('exit', 'manager');
console.log();

task.emit('exit', 'employee');

console.log('total listener', task.listenerCount('greet'));

task.removeAllListeners('greet');