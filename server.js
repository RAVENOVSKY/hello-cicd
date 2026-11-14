const http = require("node:http");

function handler(req, res) {
  if (req.url === "/health") {
    res.end("ok");
    return;
  }
  res.end("hello v1";
}

module.exports = { handler };

if (require.main === module) {
  http.createServer(handler).listen(process.env.PORT || 3300);
}
