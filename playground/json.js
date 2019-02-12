
// var obj = {
//     name: 'Sanjay PJ'
// };

// var string_obj = JSON.stringify(obj);

// console.log(typeof string_obj);
// console.log(string_obj);

// var person_string = '{"name": "Sanjay PJ", "age" : 34}';
// var person = JSON.parse(person_string);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var original_note = {
    title: 'Some title',
    body: 'sample body text 1'
};

original_note_string = JSON.stringify(original_note);

fs.writeFileSync('notes.json', original_note_string);

var note_string = fs.readFileSync('notes.json');

var note = JSON.parse(note_string);

console.log(typeof note);
console.log(note.title);