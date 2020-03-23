'use strict';
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000
const {dialogflow} = require('actions-on-google');
const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
    conv.ask('Welcome to my Action!');
});

express().use(bodyParser.json(), app).listen(PORT);
