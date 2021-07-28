const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// import helpers
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// play around with/look-up about cookie and if it can only be used with sequelize-session-store
const sess = {
  secret: 'Super secret secret',
  cookie: {
    /// CHANGE MAXAGE AND POSSIBLY ADD OTHER PROPERTIES
    maxAge: 600000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// add const hbs to create helpers
const hbs = exphbs.create({ helpers });

// add handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// contrast with using "./public"
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
