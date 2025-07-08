const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>App Running</title>
    </head>
    <body>
      <h1>Hello World!</h1>
      <p>The app is now running successfully on port 3000.</p>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
