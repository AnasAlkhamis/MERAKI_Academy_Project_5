
var events = require("events");
var eventEmitter = new events.EventEmitter();
eventEmitter.emit("my_event");
eventEmitter.on("my_event", () => {
  console.log("data received successfully.");

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
})
