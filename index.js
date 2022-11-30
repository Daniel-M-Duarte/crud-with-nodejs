const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');

dotenv.config();

connectToDatabase();

require('./modules/express');





// const { Person } = require("./person");
// require('./modules/path'); 
// require('./modules/fs');
// require('./modules/http')
// const person = new Person("Daniel");



