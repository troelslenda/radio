const express = require("express");
const faker = require("faker");
const app = express();
const port = 4201;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let lastTime = new Date();
let startTime = new Date();
let title, description;
const nextTime = () => {
  const now = new Date();
  now.setSeconds((parseInt(now.getSeconds() / 20) + 1) * 20);
  now.setMilliseconds(0);
  return now;
};

app.get("/", (req, res) => {
  if (lastTime.getTime() != nextTime().getTime()) {
    title = faker.lorem.words();
    description = faker.lorem.sentences();
    startTime = lastTime;
    lastTime = nextTime();
  }
  const data = {
    Channel: "dr.dk/mas/whatson/channel/P3",
    ChannelSlug: "p3",
    Now: {
      Title: title,
      Description: description,
      StartTime: startTime,
      EndTime: nextTime(),
      ProductionNumber: "13331910113",
      TransmissionOid: 2108074579812,
      Printable: true,
      GenreText: "Nyheder & Aktualitet",
      Slug: "go-morgen-p3-2019-03-13",
      SeriesSlug: "gomorgenp3",
      PrimaryImageUri:
        "https://www.dr.dk/mu-online-radio/api/1.0/bar/5bdad5726187a51ad854f58f",
      OnlineGenreText: "Nyheder & Aktualitet",
      BroadcastDate: "2019-03-13T00:00:00Z",
      AnnouncedStartTime: "2019-03-13T05:04:00Z",
      AnnouncedEndTime: "2019-03-13T08:04:00Z",
      WhatsOnUri: "dr.dk/mas/whatson/2108074580813",
      IsRerun: false
    },
    Next: [
      {
        Title: "Danskerbingo",
        Description:
          "Alle danskere har mindst én god historie, og i Danskerbingo vil vi høre dem alle sammen.\nAndreas og Jacob leder efter P3-lytternes bedste historier. Enten med udgangspunkt i dagens nyheder, eller ved at trække lytternes idéer ud af 'Bjørne Corydon', den 3D-printede bjørn og tilfældighedsmaskine med indbygget blæsekammer, sættes jagten på historierne i gang.\nHverken Andreas, Jacob eller lytterne ved, hvad der skal ske, når programmet starter, men der er garanti for gode historier fra Danmarks bedste lyttere.\nVærter: Andreas Kousholt og Jacob Weil.",
        StartTime: "2019-03-13T08:04:00Z",
        EndTime: "2019-03-13T11:00:00Z",
        ProductionNumber: "13331923113",
        TransmissionOid: 2108074675812,
        Printable: true,
        GenreText: "Kultur",
        Slug: "danskerbingo-2019-03-13-09-04",
        SeriesSlug: "danskerbingo-radio",
        PrimaryImageUri:
          "https://www.dr.dk/mu-online-radio/api/1.0/bar/5b8e5f8ea11f9f07484a4139",
        OnlineGenreText: "Kultur",
        BroadcastDate: "2019-03-13T00:00:00Z",
        AnnouncedStartTime: "2019-03-13T08:04:00Z",
        AnnouncedEndTime: "2019-03-13T11:00:00Z",
        WhatsOnUri: "dr.dk/mas/whatson/2108074676813",
        IsRerun: false
      }
    ]
  };

  return res.json(data);
});

app.listen(port, () => console.log(`App on port ${port}`));
