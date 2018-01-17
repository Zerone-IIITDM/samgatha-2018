const passport = require('passport');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Samgatha 2018');
    });
    
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    
    app.get('/auth/google/callback',
            passport.authenticate('google'),
            (req, res) => {
                res.redirect('/events');
    });

    app.get('/events', (req, res) => {
        res.send('Events - Coming Soon!');
    });
    
    app.get('/contact', (req, res) => {
        res.send('Contacts - Coming Soon!');
    });
    
    app.get('/about', (req, res) => {
        res.send('About - Coming Soon!');
    });
}