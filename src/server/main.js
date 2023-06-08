const express = require("express");
const ViteExpress = require("vite-express");
const {Info} = require('./models')
const db = require('./database')

const app = express();
app.use(express.json())

app.get("/api/hello", (req, res) => {
  res.send("Your Mom (lol)");
});

app.post('/api/addContent', async (req, res) => {
  await Info.create({content: "Testing..."})
})

app.post('/api/getContent', async (req, res) => {
  let info = await Info.findAll()
  res.status(200).send(info)
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
