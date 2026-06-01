const comments = require("./data");

function getHTML(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.write("<html><body><div>");
  res.write("<h1>Greetings from the http server</h1>");
  res.write("</div></body></html>");
  return res.end();
}

function getText(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  return res.end("this is plain text");
}

function getJSON(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  return res.end(JSON.stringify(comments));
}

function handleNotFound(req, res) {
  res.statusCode = 404;
  res.setHeader("Content-type", "text/plain");
  return res.end("Page not found");
}

function postComment(req, res) {
  let commentJSON = "";

  req.on("data", (chunk) => (commentJSON += chunk));

  req.on("end", () => {
    comments.push(JSON.parse(commentJSON));
    res.statusCode = 200;
    res.end("Comment data was received");
  });
}

module.exports = {
  getHTML,
  getText,
  getJSON,
  handleNotFound,
  postComment,
};
