// core module
const path = require('path');
const session = require('express-session');
const mongodbstore = require('connect-mongodb-session')(session);

const url = `mongodb+srv://DHRUV:292005@dhruv.r88dy.mongodb.net/?retryWrites=true&w=majority&appName=DHRUV`;

const store = new mongodbstore({
  uri: url,
  collection: 'sessions'
});

// module 
const express = require('express');
const app = express();
const rootdir = require('./utility/pathh.js');
const {MongoConnect} = require('./utility/database.js');
const userroutes = require('./ROUTES/userroutes');
const pageNotFound = require('./controller/404.js');



const port = 2945;

app.use(express.static(path.join(rootdir , 'public')));
app.use('/public', express.static('public'));
app.use(express.static(path.join(rootdir , 'JAVASCRIPT')));


app.use(session({
  secret: 'dd2945', // Replace with a strong secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: store // Use the MongoDB session store
}));


app.use(express.urlencoded());

app.set('views', 'views');
app.set('view engine', 'ejs');


app.use(userroutes);
app.use(pageNotFound.pageNotFound)

MongoConnect ( () => {
  app.listen(port , ()=>{
    console.log(`http://localhost:${port}`)
});
})

