const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// Server setup
const port = process.env.PORT || 3090;
// Creates a http server and sends everything to app.
const server = http.createServer(app);
server.listen(port);

console.log('server listening on', port);