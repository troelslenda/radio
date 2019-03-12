const express = require("express");
const faker = require("faker");
const app = express();
const port = 4201;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let lastTime = new Date();
let title, description;
const nextTime = () => {
  const now = new Date();
  now.setSeconds((parseInt(now.getSeconds() / 20) + 1) * 20);
  now.setMilliseconds(0);
  return now;
};

app.get("/", (req, res) => {
  if (lastTime.getTime() != nextTime().getTime()) {
    // console.log('update time');
    title = faker.lorem.words();
    description = faker.lorem.sentences();

    lastTime = nextTime();
  }

  const data = {
    endTime: nextTime(),
    startTime: "2019-03-12T17:04:00Z",
    title: title,
    description: description,
    productionNumber: "13651902112",
    sprite: "p3",
    channelName: "P3",
    channelSlug: "p3",
    primaryImageUrl:
      "https://www.dr.dk/mu-online-radio/api/1.0/bar/5b17ecd3a11fa9027c4f8edd",
    seriesSlug: "liga",
    slug: "liga-2019-03-12",
    totalDurationInMilliseconds: 10740000
  };
  return res.json(data);
});

app.listen(port, () => console.log(`App on port ${port}`));
