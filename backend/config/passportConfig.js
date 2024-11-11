// config/passportConfig.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const Patient = require('../models/Patient'); // path to Patient model

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let patient = await Patient.findOne({ where: { googleId: profile.id } });
      if (!patient) {
        // Create a new patient if they don't exist
        patient = await Patient.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName
        });
      }
      done(null, patient);
    } catch (error) {
      done(error, null);
    }
  }
));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await Patient.findByPk(id);
  done(null, user);
});
