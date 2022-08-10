// code-spell-checker:disable
const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter.on("save", () => {
  console.log("on save aCtivate");
});

emitter.on("save", () => {
  console.log("on save aCtivate2");
});

emitter.emit("save");
