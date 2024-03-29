import express from "express";

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Server running at port 4000!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});