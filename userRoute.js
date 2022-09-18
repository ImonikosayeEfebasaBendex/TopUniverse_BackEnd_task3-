const { Router } = require('express');
const userValidation = require('../controllers/user/user.validator');

const { profile } = require('../controllers/user/userController');

Router.post("/profile", userValidation, profile);

Router.post('/profile/{id}', userValidation, profile);

Router.get('/proifles', userValidation, profile);

Router.get('/search?key=firstName&value=john', userValidation, profile);

Router.post('/profile/verify', userValidation, profile);

Router.get('/proifles?sort=firstName:ASC&page=1&pageSize=10', userValidation, profile);



Create Profile      ->   post   '/profile'

Delete Profile      ->   post   

Fetch Profiles      ->   get    

Search              ->   get    

Verify Data         ->   post    -> Json Body { "data" : "encryptedToken" } 

Pagination & Sort   ->   get    






    //create a new Note
app.post('/note', notes.create);

    //retrieve all Notes
app.get('/notes', notes.findAll);

    //retrieve a single Notes with NotesID
app.get('/notes/:noteId/notes', notes.findOne);

    //update a Note with NoteId
app.put('/note/:noteId', notes.update);

    //delete a Note with noteId
app.delete('/note/:noteId', notes.delete);