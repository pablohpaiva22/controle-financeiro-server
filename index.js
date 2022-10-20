import express from "express";
import home from './routes/home.js'

const port = process.env.PORT || 3333;

const app = express();

app.use('/', home)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
