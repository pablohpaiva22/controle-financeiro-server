import express from "express";
import jwtAuth from "../jwt-config/jwt-auth.js";
import connection from "../mysql/mysql-connection.js";

const router = express.Router();

router.post("/", jwtAuth, (req, res) => {
  const sql = `INSERT INTO railway.transactions (description, price, type, id_user, date) VALUES ('${req.body.description}', '${req.body.price}', '${req.body.type}', '${req.body.id_user}', '${req.body.date}')`;

  connection.query(
    sql,

    function (err, results) {
      if (err) {
        res.status(401).send({ msg: "Erro ao conectar no banco de dados" });
        return false;
      }

      res.send({ msg: "Nova transação criada com sucesso!" });
    }
  );
});

export default router;
