import jwt from 'jsonwebtoken'

const auth = (app, Users) => {
  app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = await Users.findOne({ where: { username: username } })

    if(!user) { return res.status(404).json({ notFound: 'User not found'})}
    if(user.dataValues.password !== password) { return res.status(404).json({ invalidPass: 'Incorrect Password' })}

    const payload = { id: user.dataValues.id, username: user.dataValues.username }

    try {
      jwt.sign(
        payload,
        process.env.SESSION_SECRET,
        { expiresIn: 86400 },
        (err, token) => {
          res.json({
            sucess:true,
            token: `${token} ${id}`
          })
        }
      )

      const token = jwt.sign({ id: payload.id },
        process.env.SESSION_SECRET )

      res.json({ token, payload })
    } catch (err) {
      console.error(err)
      res.send(400),json(err)
    }
  })

  return app
}

export default auth