const express = require("express");

const app = express();

app.use(() => {
  console.log("Server Running...");
});

app.listen(4000);
