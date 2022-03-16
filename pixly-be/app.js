"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//routers
const postcards_1 = require("./routes/postcards");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/postcards", postcards_1.postcardRoutes);
module.exports = app;
