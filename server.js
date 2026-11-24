// server.js - Production HTTP server for Next.js on cPanel / Phusion Passenger
const http = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Jinpeng Nepal Next.js server ready on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error starting Next.js server:", err);
    process.exit(1);
  });
