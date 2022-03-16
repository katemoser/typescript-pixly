const app = require("./app");
// const { PORT } = require("./config");
import { PORT } from "./config"

app.listen(PORT, function () {
    console.log(`Started on http://localhost:${PORT}`);
  });

// app.listen(5001, () => {
//     console.log('The application is listening on port 5001!');
// })
