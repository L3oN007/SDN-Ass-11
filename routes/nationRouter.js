const express = require('express');
const bodyParser = require('body-parser');

const nationRouter = express.Router();

nationRouter.use(bodyParser.json());

nationRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the nations to you');
    })
    .post((req, res) => {
        console.log("👻Res body", req.body);
        res.end('Will add the nation: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /nations');
    })
    .delete((req, res) => {
        res.end('Deleting all nations');
    })

//! Endpoint /nations/:nationId
nationRouter.route('/:nationId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the nation: ${req.params.nationId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /nations/${req.params.nationId}`);
    })
    .put((req, res) => {
        res.write(`Updating the nation: ${req.params.nationId}\n`);
        res.end(`Will update the nation: ${req.body.name} with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting nation: ${req.params.nationId}`);
    })

module.exports = nationRouter;
