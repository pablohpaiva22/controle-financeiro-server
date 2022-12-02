import express from "express";
import connection from "../mysql/mysql-connection.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", (req, res) => {
  if (req.body.email === "") {
    return res.status(401).send({ msg: "O campo 'E-mail' está vazio" });
  }

  if (req.body.password === "") {
    return res.status(401).send({ msg: "O campo 'Senha' está vazio" });
  }

  const sql = `SELECT * FROM new_project.users WHERE email = '${req.body.email}'`;

  connection.query(
    sql,

    function (err, results) {
      if (err) {
        res.send(err);
        return false;
      }

      if (results.length === 0) {
        return res.status(401).send({ msg: "E-mail não cadastrado" });
      }

      if (req.body.password === results[0].password) {
        const token = jwt.sign(
          {
            id: results[0].id,
            name: results[0].name,
            email: results[0].email,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h",
          }
        );

        return res.send({ msg: "Usuário logado com sucesso", token });
      }

      res.status(401).send({ msg: "Senha incorreta" });
    }
  );
});

export default router;
