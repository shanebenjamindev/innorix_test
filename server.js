const express = require('express');
const app = express();

const path = require('path')

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const { devices } = require('./deviceData');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('../main', { devices: devices });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
