import jwt from 'jsonwebtoken'

function jwtAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]

    const decode = jwt.verify(token, process.env.JWT_KEY)
    req.usuario = decode
    next()
  } catch (err) {
    return res.status(401).send({ msg: 'Falha na autentificação - Token inválido'})
  }
}

export default jwtAuth;
