const http = require("http");
const {
  handleNotFound,
  getHTML,
  getJSON,
  getText,
  postComment,
} = require("./handlers");

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/http") {
    return getHTML(req, res);
  }

  if (req.method === "GET" && req.url === "/text") {
    return getText(req, res);
  }

  if (req.method === "GET" && req.url === "/json") {
    return getJSON(req, res);
  }

  if (req.method === "POST" && req.url === "/json") {
    return postComment(req, res);
  }

  return handleNotFound(req, res);
});

server.listen(PORT, () => {
  console.log(`Server was launched on port ${PORT}`);
});
