const express = require("express");
const server = express();
const cors = require("cors");
server.use(express.json());
server.use(express.static(__dirname + "/../public/img"));
server.use(cors());
const { Technology } = require("./../models/");

server.get("/", (req, res) => {
  res.send("Hello World");
});
server
  .get("/technology", async (req, res) => {
    let technologies = await Technology.find();
    technologies = technologies.map((item) => {
      item.logo = `${req.protocol}://${req.headers.host}/${item.logo}`;
      return item;
    });

    res.json(technologies);
  })
  .get("/technology/:id", async (req, res) => {
    const { id } = req.params;

    let technology = await Technology.findById(id);
    technology.logo = `${req.protocol}://${req.headers.host}/${technology.logo}`;

    res.json(technology);
  })
  .get("/technology/search/:name", async (req, res) => {
    const { name } = req.params;
    let technologies = await Technology.find({
      name: { $regex: name, $options: "i" },
    });
    technologies = technologies.map((item) => {
      item.logo = `${req.protocol}://${req.headers.host}/${item.logo}`;
      return item;
    });
    res.json(technologies);
  })
  .put("/technology/:id", (req, res) => {
    res.send("Technology");
  })
  .delete("/technology/:id", (req, res) => {
    res.send("Technology");
  });

module.exports = server; // export the server so we can use it in other files
