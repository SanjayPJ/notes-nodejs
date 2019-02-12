console.log('starting notes.js...');

var add_note = (title, body) => {
    console.log('Adding note', title, body);
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