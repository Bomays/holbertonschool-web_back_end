// Script to create a simple HTTP server

import { createServer } from 'http';

const app = createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245);

export default app;
