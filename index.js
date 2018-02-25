const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == 'production') {
    // Serve the static react app files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Serve index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}...`);
});