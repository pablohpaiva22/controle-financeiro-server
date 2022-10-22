import express from "express";
import connection from "../mysql/mysql-connection.js";

const router = express.Router();

router.post("/", (req, res) => {
  const pass = req.body.password.toString()

  if (req.body.user === "") {
    return res.status(401).send({ msg: "O campo 'usuário' está vazio" });
  }

  if (req.body.email === "") {
    return res.status(401).send({ msg: "O campo 'e-mail' está vazio" });
  }

  if (!req.body.password) {
    return res.status(401).send({ msg: "O campo 'senha' está vazio" });
  }

  if (!req.body.passCheck) {
    return res
      .status(401)
      .send({ msg: "O campo 'confirme a senha' está vazio" });
  }

  if (req.body.password !== req.body.passCheck) {
    res.status(401).send({ msg: "As senha não conferem" });
    return false;
  }

  if (pass.length < 6) {
    res.status(401).send({ msg: "A senha deve conter no mínimo 6 caracteres" });
    return false;
  }

  const sql = `INSERT INTO heroku_051d91685db6ea0.user (name, email, password) VALUES ('${req.body.user}', '${req.body.email}' ,'${req.body.password}')`;

  connection.query(
    sql,

    function (err) {
      if (err) {
        if (err.sqlMessage && err.sqlMessage.includes("name")) {
          res.status(401).send({ msg: "Usuário já existente" });
          return false;
        }

        if (err.sqlMessage && err.sqlMessage.includes("email")) {
          res.status(401).send({ msg: "Email já existente" });
          return false;
        }

        res.send(err);
        return false;
      }

      console.log("Usuário criado com sucesso");
      res.send({ msg: "Usuário criado com sucesso" });
    }
  );
});

export default router;
