"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseUri = exports.PORT = void 0;
require("dotenv/config");
// Commented out so we don't say the quiet thing out loud
// const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";
const PORT = 5001;
exports.PORT = PORT;
// TODO: This will be needed in our final config / deployment!!!!!!!!!
// const PORT: number = +process.env.PORT || 5001;
// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")
        ? "jobly_test"
        : process.env.DATABASE_URL || "jobly";
}
exports.getDatabaseUri = getDatabaseUri;
