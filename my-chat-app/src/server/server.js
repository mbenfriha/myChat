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


//Connect to mongoDB server
mongoose.connect('mongodb://localhost:27017/Angular');
console.log('I\'m Connected !!!');
mongoose.set('debug', true);

// Clients
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
   console.log(req.body)
   User.create(req.body, (err, data) => {
      err ? res.send(err) :  res.send(data);
   })
})

app.post('user/pseudo',(req, res) => {
   User.find({name : req.body}, (err, data) => {
      err ? res.send(err) :  res.send(data);
   })})
