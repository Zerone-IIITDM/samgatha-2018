const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Samgatha 2018');
});

app.get('/events', (req, res) => {
    res.send('Events - Coming Soon!');
});

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}...`);
});