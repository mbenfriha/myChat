var router = require('express').Router();
 
module.exports = router;
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Angular');
mongoose.set('debug', true);

var Schema = mongoose.Schema;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});
var port = '3000';
app.set('port', port);
 
const server = http.createServer(app);
 
server.listen(port, () => console.log(`API running on localhost:${port}`));


var io = require('socket.io').listen(server);


//Connect to mongoDB server
mongoose.connect('mongodb://localhost:27017/Angular');
console.log('I\'m Connected !!!');
mongoose.set('debug', true);

// User
let UserSchema = new Schema({
   name: String,
	password: String,
	avatar: String,
	online: Boolean,
   friends: String,
}, { timestamps: true });

UserSchema.methods.toDto = function() {
   return {
      name: this.name,
      password: this.password,
      avatar: this.avatar,
      online: this.online,
      friends: this.friends,
   }
}
mongoose.model('User', UserSchema);
const User = mongoose.model('User');


User.createCollection().then(console.log('Collection User Créée !'));

app.get('/user/all', (req, res) => {
   User.find({}, (err, data) => {
      err ? res.send(err) :  res.send(data);
   })
})

app.post('/user/create', (req, res) => {
   User.create(req.body, (err, data) => {
      err ? res.send(err) :  res.send(data);
   })
})

app.post('/user/add/friend', (req, res) => {
   User.find(req.body.name, (err, data) => {
      console.log(req.body);
      err ? res.send(err) :  res.send(data);
   })
})

app.get('/user/:pseudo',(req, res) => {
   var pseudo = req.params.pseudo
   User.find({name : pseudo}, (err, data) => {
      err ? res.send(err) :  res.send(data);
   })
})

   //Conversation
   let ConversationSchema = new Schema({
      nom: String,
      users: String,
      messages: {
         user: String,
      	content: String,
	      date: Date,
      },
      public: Boolean,	
   }, { timestamps: true });
   
   ConversationSchema.methods.toDto = function() {
      return {
         nom: this.nom,
         users: this.users,
         messages: this.messages,
         public: this.public,
      }
   }
   mongoose.model('Conversation', ConversationSchema);
   const Conversation = mongoose.model('Conversation');
   
   
   Conversation.createCollection().then(console.log('Collection Conversation Créée !'));
   
   app.get('/conv/all', (req, res) => {
      Conversation.find({}, (err, data) => {
         err ? res.send(err) :  res.send(data);
      })
   })
   
   app.post('/conv/create', (req, res) => {
      Conversation.create(req.body, (err, data) => {
         err ? res.send(err) :  res.send(data);
      })
   })
   
   app.get('/conv/:pseudo',(req, res) => {
      var pseudo = req.params.pseudo
      Conversation.find({name : pseudo}, (err, data) => {
         err ? res.send(err) :  res.send(data);
      })})




//socket

var users = [];
var messages = [];

io.sockets.on('connection', function (socket) {
  users.push(socket.user);
  socket.broadcast.emit('user', users);
  socket.emit('message', {messages});

  //Quand un client se deconnecte
  socket.on('disconnect', function(user) {
    users = users.filter(i => i !== user);
    socket.broadcast.emit('user', users)
  });

  // Quand un client envoi un message
  socket.on('message', function (message) {

    messages.push({user: message.user, message: message.content});
    //}
    socket.emit('new', messages);
    socket.broadcast.emit('new', messages)
  });
});
