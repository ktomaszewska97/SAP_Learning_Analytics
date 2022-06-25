/*eslint no-console: 0, no-unused-vars: 0, no-undef:0, no-process-exit:0*/
/*eslint-env node, es6 */

"use strict";
const https = require("https");
const port = process.env.PORT || 3100;
const server = require("http").createServer();
const express = require("express");

//Initialize Express App for XSA UAA and HDBEXT Middleware
const xsenv = require("@sap/xsenv");
const passport = require("passport");
const xssec = require("@sap/xssec");
const xsHDBConn = require("@sap/hdbext");
xsenv.loadEnv();

https.globalAgent.options.ca = xsenv.loadCertificates();
global.__base = __dirname + "/";
global.__uaa = process.env.UAA_SERVICE_NAME;

//logging
let logging = require("@sap/logging");
let appContext = logging.createAppContext();

//Initialize Express App for XS UAA and HDBEXT Middleware
let app = express();

//Build a JWT Strategy from the bound UAA resource
passport.use("JWT", new xssec.JWTStrategy(xsenv.getServices({
	uaa: {
		tag: "xsuaa"
	}
}).uaa));

//Add XS Logging to Express
app.use(logging.middleware({
	appContext: appContext,
	logNetwork: true
}));

//Add Passport JWT processing
app.use(passport.initialize());

let hanaOptions = xsenv.getServices({
	hana: {
		plan: "hdi-shared"
	}
});

hanaOptions.hana.pooling = true;
//Add Passport for Authentication via JWT + HANA DB connection as Middleware in Expess
app.use(
	xsHDBConn.middleware(hanaOptions.hana),
	passport.authenticate("JWT", {
		session: false
	})
);

//Setup Additional Node.js Routes
require("./router")(app, server);

//Start the Server
server.on("request", app);
server.listen(port, function () {
	console.info(`HTTP Server: ${server.address().port}`);
});
