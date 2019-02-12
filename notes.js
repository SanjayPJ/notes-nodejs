console.log('starting notes.js...');

const fs = require('fs');

var add_note = (title, body) => {
    console.log('Adding note', title, body);
    var notes = [];
    var note = {
        title,
        body
    };

    var note_string = fs.readFileSync('notes-data.json');
    notes = JSON.parse(note_string);
    try{
        var note_string = fs.readFileSync('notes-data.json');
        notes = JSON.parse(note_string);
    }catch(e){};
    var duplicate_notes = notes.filter((note) => note.title === title);
    if(duplicate_notes.length === 0 ){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    };
};

var get_all = () => {
    console.log('Getting all notes...');
};

var read_note = (title) => {
    console.log('Getting note', title);
}

var remove_note = (title) => {
    console.log('Getting note', title);
}


module.exports = {
    add_note,
    get_all,
    read_note,
    remove_note
};