const express = require('express');
const app = express()
const appId = process.env.APPID;

app.get('/', (req, res) => res.send(`Opening app : ${appId}`));

app.listen(appId, () => console.log(`App listening on port ${appId}!`))
