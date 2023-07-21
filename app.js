const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
  });

const port = 5555; 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});