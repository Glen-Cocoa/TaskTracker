import cors from 'cors'
import session from 'express-session'
import dotenv from 'dotenv'
import passport from 'passport'
import auth from './auth.js'

const addMiddleware = (app, express, Users) => {

  dotenv.config()

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  auth(app, Users)

  return app
}

export default addMiddleware