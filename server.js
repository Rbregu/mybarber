const http = require("http");
const fs = require("fs");

// Create a server object
const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile("index.html", (err, data) => {
    if (err) {
      // If there's an error reading the file, respond with an error status
      res.writeHead(500);
      return res.end("Error loading index.html");
    }
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { "Content-Type": "text/html" });
    // Send the contents of the HTML file as the response body
    res.end(data);
  });
});

// The server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
