/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";
var express = require("express");

module.exports = function() {
	var app = express.Router();

	//Hello Router
	app.get("/", (req, res) => {
		return res.type("text/plain").status(200).send("Hello World Node.js");
	});
	
	//Simple Database Select - In-line Callbacks
	//Example1 handler
	app.get("/example1", (req, res) => {
		let client = req.db;
		client.prepare(
			`SELECT SESSION_USER, CURRENT_SCHEMA
										 FROM "DUMMY"`,
			(err, statement) => {
				if (err) {
					return res.type("text/plain").status(500).send(`ERROR: ${err.toString()}`);
				}
				statement.exec([],
					(err, results) => {
						if (err) {
							return res.type("text/plain").status(500).send(`ERROR: ${err.toString()}`);
						} else {
							var result = JSON.stringify({
								Objects: results
							});
							return res.type("application/json").status(200).send(result);
						}
					});
				return null;
			});
		return null;
	});
	
	var async = require("async");
	
	app.get("/example2", (req, res) => {
	let client = req.db;
	async.waterfall([
		function prepare(callback) {
			client.prepare(`SELECT SESSION_USER, CURRENT_SCHEMA
											FROM "DUMMY"`,
				(err, statement) => {
					callback(null, err, statement);
				});
		},

		function execute(err, statement, callback) {
			statement.exec([], (execErr, results) => {
				callback(null, execErr, results);
			});
		},
		function response(err, results, callback) {
			if (err) {
				res.type("text/plain").status(500).send(`ERROR: ${err.toString()}`);
			} else {
				var result = JSON.stringify({
					Objects: results
				});
				res.type("application/json").status(200).send(result);
			}
			return callback();
		}
	]);
	});
	
	app.get("/example3", (req, res) => {
	let client = req.db;
	async.waterfall([
		function prepare(callback) {
			client.prepare(`SELECT * FROM "myModel.Litmos"`,
				(err, statement) => {
					callback(null, err, statement);
				});
		},

		function execute(err, statement, callback) {
			statement.exec([], (execErr, results) => {
				callback(null, execErr, results);
			});
		},
		function response(err, results, callback) {
			if (err) {
				res.type("text/plain").status(500).send(`ERROR: ${err.toString()}`);
			} else {
				var result = JSON.stringify({
					Objects: results
				});
				res.type("application/json").status(200).send(result);
			}
			return callback();
		}
	]);
});
		
	return app;

};
