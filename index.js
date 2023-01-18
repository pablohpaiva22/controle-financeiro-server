import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors'
import home from './src/routes/home.js'
import newuser from './src/routes/newuser.js'
import login from './src/routes/login.js'
import getuser from './src/routes/getuser.js'
import gettransactions from './src/routes/gettransactions.js'
import newtransaction from './src/routes/newtransaction.js'
import deletetransaction from './src/routes/deletetransaction.js'

const port = process.env.PORT || 3333;

const app = express();

app.use(cors())
app.use(express.json())

app.use('/', home)
app.use('/newuser', newuser)
app.use('/login', login)
app.use('/getuser', getuser)
app.use('/gettransactions', gettransactions)
app.use('/newtransaction', newtransaction)
app.use('/deletetransaction', deletetransaction)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
  