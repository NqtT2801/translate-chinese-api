const translate = require("translate-google");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 4000;

app.post("/translate", async (req, res) => {
  const translatedText = await translate(req.body.source, {
    from: "zh-CN",
    to: "en",
  });
  res.json({result: translatedText});
});

app.get("/", (req, res) => {
  res.send("Translate server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
