var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
const passport = require('passport');
const  config = require('./config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: config.user.secret,
  resave: false,
  saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
  usernameField: 'user',
  passwordField: 'password'
}, function(username, password, done) {
  if ((username != config.user.name && password != config.user.password)) {
    return done(null, false, { message: 'Usuário e senha inválidos' })
  }
  return done(null, username);
}));

passport.serializeUser(function(username, done) {
  console.log(username);
  done(null, username)

}); 

passport.deserializeUser(function(username, done) {
  done(null, username)
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('./shared/error');
});

module.exports = app;
