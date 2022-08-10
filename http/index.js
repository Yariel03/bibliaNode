const express = require("express");
const app = express();
const { NotFoundMiddleware } = require("./middleware/");

const { HomeRouter } = require("./router/index");

app.use("/", HomeRouter);
app.use(NotFoundMiddleware);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
