const express = require("express");
const ViteExpress = require("vite-express");

const app = express();

app.get("/api/hello", (req, res) => {
  res.send("Your Mom (lol)");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
