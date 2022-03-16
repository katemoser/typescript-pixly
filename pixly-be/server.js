"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("./app");
// const { PORT } = require("./config");
const config_1 = require("./config");
app.listen(config_1.PORT, function () {
    console.log(`Started on http://localhost:${config_1.PORT}`);
});
// app.listen(5001, () => {
//     console.log('The application is listening on port 5001!');
// })
