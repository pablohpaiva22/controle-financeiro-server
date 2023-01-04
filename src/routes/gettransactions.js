import express from "express";
import jwtAuth from "../jwt-config/jwt-auth.js";
import connection from "../mysql/mysql-connection.js";

const router = express.Router();

router.get("/", jwtAuth, (req, res) => {
  console.log(req.user);

  const sql = `SELECT * FROM railway.transactions WHERE id_user = ${req.user.id}`;

  connection.query(
    sql,

    function (err, results) {
      if (err) {
        res.status(401).send({ msg: "Erro ao conectar no banco de dados" });
        return false;
      }

      console.log(results);

      res.send(results);
    }
  );
});

export default router;
