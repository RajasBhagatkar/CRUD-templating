const { compileETag } = require("express/lib/utils");

const comments = [
    {
        id:123,
        username: 'Todd',
        comment: 'lol that is so funny!'
    },

    {
        id:1234,
        username: 'Skyler',
        comment: 'I like to go Birdwathcing with my dog'
    },

    {
        id:12345,
        username: 'sk8erBoi',
        comment: 'Plz delete your comment, Todd,'
    },

    { 
        id:123456,
        username: 'OnlysayWoof',
        comment: 'woof woof woof'
    },

    { 
        id:1234567,
        username: 'RajasB',
        comment: 'hell,, haha lool'
    },

]

const id = 123;
const comment = comments.find(c => c.id == id)

console.log(comment);

