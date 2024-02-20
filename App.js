const http = require("http");
const {routerListner ,tempText} = require("./routes");

const server = http.createServer(routerListner);
server.listen(4000);
