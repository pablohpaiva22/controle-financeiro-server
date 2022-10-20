import express from "express";

const port = process.env.PORT || 3333;

const app = express();

app.use('/', function(req, res) {
  res.send({ msg: 'Hello World'})
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
