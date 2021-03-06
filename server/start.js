require('dotenv').config({ path: './variables.env' });

const mongoose = require('mongoose');

const fs = require('fs');

// Connect to MongoDB
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(err.message);
});
mongoose.connection.on('connecting', () => {
  console.log('connecting');
});
mongoose.connection.on('connected', () => {
  console.log('connected');
});

// models
require('./models/Category')
require('./models/Quality')
require('./models/Status')
require('./models/Trophy')
require('./models/User')

const app = require('./server');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
