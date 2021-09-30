const serverless = require('serverless-http');
const express = require('express');
const app = express();
const AWS = require('./aws-s3');

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get('/api/info', (req, res) => {
    res.send({application: 'sample-app', version: '1.0'});
});

app.get('/api/config', async (req, res) => {
    const data = await AWS.downloadFile(req.query.key);
    console.log(data);
    res.send(JSON.parse(data));
});

app.post('/api/config', async (req, res) => {
    const fileData = req.body;
    console.log(fileData);
    console.log(fileData.content);
    const resp = await AWS.uploadFile(fileData.key, fileData.content);
    console.log(resp);
    res.send(resp);
});

app.post('/api/getback', (req, res) => {
    res.send({...req.body});
});

// app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);

