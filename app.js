console.log('starting app.js...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log(process.argv);

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command :', argv._[0]);

// console.log('Process', process.argv);
// console.log('Yargs', argv);

if (command === 'add'){
    // console.log('Adding new note...');
    notes.add_note(argv.title, argv.body);
}else if (command === 'list'){
    // console.log('Listing all notes...');
    notes.get_all();
}else if (command === 'read'){
    // console.log('Reading note...'); 
    notes.read_note(argv.title);
}else if(command === 'remove'){
    // console.log('Removing note...');
    notes.remove_note(argv.title)
}else{
    console.log('Command not recognized.');
}
