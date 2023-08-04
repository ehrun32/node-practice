const express = require("express");
const app = express();
const tasks = "./controllers/tasks";

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));
