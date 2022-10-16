const http = require('http');
const port = 9000;
const app = require('./app');

const PORT = process.env.PORT || 8085;
const server = http.createServer(app);

const app = http.createServer((req, res) => {
  if (req.url === '/movies' && req.method === 'GET') {
    res.writeHead(200);
    res.end('All Movies Data in JSON format from Mongo DB');
  } else if (req.url === '/geners' && req.method === 'GET') {
    res.writeHead(200);
    res.end('All Genres Data in JSON format from Mongo DB');
  } else if (req.url === '/artists' && req.method === 'GET') {
    res.writeHead(200);
    res.end('All Artists Data in JSON format from Mongo DB');
  } else {
    res.writeHead(404);
    res.end('Not Found!!');
  }
});
const db = require('./app/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });
app.listen(port);
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
