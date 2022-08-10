// code-spell-checker:disable
const Emitter = () => {
  this.events = {};
};
Emitter.prototype.on = (type, listener) => {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Emitter.prototype.emit = (type) => {
  if (this.events[type]) {
    this.events[type].forEach((listener) => listener());
  }
};

module.exports = Emitter;
