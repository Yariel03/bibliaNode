require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const {} = require("./config/index.js");
const cron = require("node-cron");
const axios = require("axios").default;
const connectionString = process.env.MONGODB_URI;
const cheerio = require("cheerio");
mongoose.connect(connectionString, {
  useNewUrlParser: true,
});

cron.schedule("* * * * * ", () => {
  console.log("running a task every minute");
});

// (async () => {
//   const html = await axios.get("https://cnnespanol.cnn.com/");
//   const $ = cheerio.load(html.data);
//   const titles = $(".news__title");
//   titles.map((el) => {
//     const breakingNews = {
//       title: $(el).text().toString(),
//       link: $(el).children().attr("href"),
//     };
//     console.log(breakingNews);
//   });
// })();

//   console.log(titles);

// const Cat = mongoose.model("Cat", { name: String, age: Number });
// const kitty = new Cat({ name: "Zildjian", age: 2 });
// kitty.save().then(() => console.log("meow"));

// const garfiel = new Cat({ name: "garfiel", age: 2 });
// garfiel.save().then(() => console.log("meow"));

// Cat.find().then((cats) => console.log(cats));
