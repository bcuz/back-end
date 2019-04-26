const server = require("./api/server");
const port = process.env.port || 5000;

server.get("/", (req, res) => {
  res.send("hi");
});
server.listen(port, () => console.log(`listening to ${port}`));