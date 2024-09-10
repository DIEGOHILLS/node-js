const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http
        .createServer((req, res) => {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/html"
            });
            let responseMessage = "<h1>Welcome!</h1>";
            res.end(responseMessage);
        })
        .listen(port);