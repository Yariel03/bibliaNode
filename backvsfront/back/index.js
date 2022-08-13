const server = require("./server");

const { PORT, MONGO_URI } = require("./config/index.js");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongoDB");
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err + "error connecting to mongoDB");
  });
