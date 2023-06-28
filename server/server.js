const express = require("express");
const app = express();
const port = 8000;

// GET route
app.get("/", (req, res) => {
  res.status(200).json({ name: "Jose", subname: "Server" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
