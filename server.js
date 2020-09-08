require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const handle = require("./handlers");

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/cryptocurrency", handle.crypto);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`SoccerMASS API:::listening on port ${PORT}`));
