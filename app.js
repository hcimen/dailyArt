const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
  });

const port = 5555; 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});