"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
const db = new Client({
    connectionString: getDatabaseUri(),
});
db.connect();
exports.default = db;
