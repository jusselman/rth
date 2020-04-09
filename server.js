const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profiles', require('./routes/api/profiles'));

// file upload for images 
// app.use(fileUpload());

// The following "catch *" route is necessary
// for SPA client-side routing to properly work 
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// file upload, might not be necessary //

// app.post('/upload', (req, res) => {
//     if (req.files === null) {
//         return res.status(400).json({ msg: 'No Image Uploaded' });
//     }

//     const file = req.files.file;

//     file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send(err);
//         }

//         res.json({ fileName: file.name, filePath: `uploads/${file.name}` });
//     });
// })

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});