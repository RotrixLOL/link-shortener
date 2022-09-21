import express from 'express'
import bodyParser from 'body-parser'
import get from 'axios'
// import _ from 'lodash'
// import mongoose, { Model, Schema } from 'mongoose'
// import session, { Session } from 'express-session'
// import passport, { StrategyCreated } from 'passport'
// import passportLocalMongoose from 'passport-local-mongoose'
// import github2, { Strategy } from 'passport-github2'
// const GitHubStrategy = github2.Strategy
// import findOrCreate from 'mongoose-findorcreate'

import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(session({
// 	secret: process.env.SECRET_STRING,
// 	resave: false,
// 	saveUninitialized: false
// }))

// app.use(passport.initialize())
// app.use(passport.session())

// mongoose.connect(`${process.env.MONGO_CONN}/link-shortener`)
// console.log('Connected successfully to mongoDB')

// const userSchema: Schema = new mongoose.Schema({
// 	githubId: String,
// 	links: [
//         {
//             link: String,
//             shortenedLink: String
//         }
//     ]
// })

// userSchema.plugin(passportLocalMongoose)
// userSchema.plugin(findOrCreate)

// const User = new mongoose.model('User', userSchema)

// passport.use(User.createStrategy())

// passport.serializeUser((user, done) => {
// 	done(null, user.id)
// })

// passport.deserializeUser((id, done) => {
// 	User.findById(id, (err, user) => {
// 		done(err, user)
// 	})
// })

// passport.use(new GitHubStrategy({
//     clientID: process.env.GITHUB_CLIENT_ID,
//     clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/github/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log(profile)
//     User.findOrCreate({ githubId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

app.get('/api', (req, res) => {
    res.send('Hello world from server')
})

// app.get('/auth/github', (req, res) => {
//     passport.authenticate('github', { scope: ['profile'] })
// })

// app.get('/auth/github/callback',
// 	passport.authenticate('github', { failureRedirect: '/' }),
// 	(req, res) => {
// 		res.redirect('/')
// 	}
// )

export const handler = app;