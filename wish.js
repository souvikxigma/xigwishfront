var express = require('express');
const path = require("path");
var expressLayouts = require('express-ejs-layouts');
const http = require('http');
const bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');

// call express
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// set the view engine to ejs
app.use(expressLayouts);
///////
app.use(session({resave: true, saveUninitialized: true, secret: 'XCR3rsasa%RuuuDHHH', cookie: { maxAge: 6000000 }}));
// set the view engine to ejs
app.use(flash());



app.set('view engine', 'ejs');
app.use('', express.static(__dirname + '/public'));
require('dotenv').config({path:'.env'});
//custom layout set //
app.set('layout', 'partials/layout');
// app.set('views', path.join(__dirname, 'views'));

//model injecting//
// require('./models/index')
// use res.render to load up an ejs view file

const contactRouter = require('./routers/contactRouter');


// // index page
// app.get('/', function(req, res) {
//     res.render('front/addcontact');
// });


////define all routes///
// const dashboardAdminRouter = require('./routes/dashboardRouter');
// const orderAdminRouter = require('./routes/OrdersRouter');
// const signinAdminRouter = require('./routes/loginRouter');



// ////define all controller ////

app.use(`/contact`,contactRouter);
// app.use(`/all-orders`,orderAdminRouter);
// app.use('/',signinAdminRouter);



app.get('/', function(req, res) {
  res.send({'kk':"hhh"});
});

// app.listen(8080);
// console.log('Server is listening on port 8080');


const server = http.createServer(app);

server.listen(process.env.PORT,()=>{
  console.log(`server is working`);
});