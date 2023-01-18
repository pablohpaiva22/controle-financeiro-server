import express from "express";
import jwtAuth from "../jwt-config/jwt-auth.js";
import connection from "../mysql/mysql-connection.js";

const router = express.Router();

router.delete("/", jwtAuth, (req, res) => {
  const sql = `DELETE FROM railway.transactions WHERE (id = '${req.body.id}');`;

  connection.query(
    sql,

    function (err, results) {
      if (err) {
        res.status(401).send({ msg: "Erro ao conectar no banco de dados" });
        return false;
      }

      res.send({ msg: "Mensagem deletada com sucesso" });
    }
  );
});

export default router;
