import express from "express";
import jwtAuth from "../jwt-config/jwt-auth.js";

const router = express.Router();

router.get("/", jwtAuth, (req, res) => {
  res.send({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  });
});

export default router;
