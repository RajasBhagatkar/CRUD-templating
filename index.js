const express  = require('express')
const methodOverride = require('method-override')
const app = express()
const path = require('path')
const { v4: uudi } = require('uuid')

app.use(methodOverride("_method"))

// to handel the url encoded data
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id:uudi(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },

    {
        id:uudi(),
        username: 'Skyler',
        comment: 'I like to go Birdwathcing with my dog'
    },

    {
        id:uudi(),
        username: 'sk8erBoi',
        comment: 'Plz delete your comment, Todd,'
    },

    { 
        id:uudi(),
        username: 'OnlysayWoof',
        comment: 'woof woof woof'
    },

    { 
        id:uudi(),
        username: 'RajasB',
        comment: 'hell,, haha lool'
    },

]

// CRUD :- Create read update Delete


// read 
app.get('/comments', (req,res)=>{
    res.render('comments/index',{comments})
})


// Create 
app.get('/comments/new',(req, res)=>{
    res.render('comments/new')
    
})

app.post('/comments',(req,res)=>{
    const {username, comment} = req.body
    comments.push({ username, comment, id: uudi() })
    res.redirect('/comments')
})



// sequance Matter don't you think 

app.get('/comments/:id',(req,res)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id) ;
    // console.log(comment);
   res.render('comments/show', { comment, id });
})

// deleting the comment
app.delete('/comments/:id', (req, res)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    comments = comments.filter(c => c.id !== id)
    res.redirect("/comments")

})


// overriding and patch both are work togethere
// overriding
app.get('/comments/:id/edit',(req,res)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id) ;
    console.log(comment);
    res.render('comments/edit', { comment })
})


// updating 

app.patch('/comments/:id', (req,res)=>{
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText
    res.redirect('/comments')
})



app.get('/tacos',(req,res)=>{
    res.send('hello there this is nice testingMark2 GET request ')
})


app.post('/tacos',(req,res)=>{
    const {meat, qty} = req.body
    res.send(`Ok here are you ${qty} ${meat} Tacos Enjoy!!`)

})

app.listen(5000, ()=>{
    console.log('listening on port 5000');
})

// feeling Overwhelm what do you think what is templating