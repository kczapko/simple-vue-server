const path = require("path");

const express = require("express");
const helmet = require("helmet");

const app = express();

app.set("trust proxy", true);

app.use(express.static("public"));
app.use(helmet());
app.use((req, res, next) => {
  res.status(200).sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.listen(process.env.PORT || 3000);
