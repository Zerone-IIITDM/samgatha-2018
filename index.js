const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');
require('./services/passport');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(passport.initialize());

if (process.env.NODE_ENV == 'production') {
    // Serve the static react app files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Serve index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}...`);
});