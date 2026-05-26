const http = require("http");

const PORT = 5000;

const comments = [
  {
    id: 100,
    title: "Abai zholy",
    author: "Mukhtar Auezov",
  },
  {
    id: 200,
    title: "Kokserek",
    author: "Mukhtar Auezov",
  },
  {
    id: 300,
    title: "Kargyn",
    author: "Mukhtar Auezov",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/http") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write("<html><body><div>");
    res.write("<h1>Greetings from the http server</h1>");
    res.write("</div></body></html>");
    return res.end();
  }

  if (req.url === "/text") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    return res.end("this is plain text");
  }

  if (req.url === "/json") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    return res.end(JSON.stringify(comments));
  }

  res.statusCode = 404;
  res.setHeader("Content-type", "text/plain");
  return res.end("Page not found");
});

server.listen(PORT, () => {
  console.log(`Server was launched on port ${PORT}`);
});
