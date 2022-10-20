import express from "express";
import cors from 'cors'
import home from './routes/home.js'

const port = process.env.PORT || 3333;

const app = express();

app.use(cors())
app.use(express.json())

app.use('/', home)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
