import express from "express";
import jwtAuth from "../jwt-config/jwt-auth.js";
import connection from "../mysql/mysql-connection.js";

const router = express.Router();

router.get("/", jwtAuth, (req, res) => {
  const sql = `SELECT * FROM railway.transactions WHERE id_user = ${req.user.id}`;

  connection.query(
    sql,

    function (err, results) {
      if (err) {
        res.status(401).send({ msg: "Erro ao conectar no banco de dados" });
        return false;
      }

      const data = results.map((item) => {
        const getFullDate = new Date(item.date);
        const ptBrDate = getFullDate.toLocaleDateString("pt-br");
        const formattedDate = ptBrDate.slice(0, -5);

        const formattedPrice = item.price.replace('.', ',')

        return {
          id: item.id,
          description: item.description,
          price: formattedPrice,
          type: item.type,
          date: formattedDate,
          id_user: item.id_user,
        };
      });

      res.send(data);
    }
  );
});

export default router;
