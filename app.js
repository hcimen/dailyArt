const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

const getSomeArt = require('./public/scripts/getSomeArt');

app.get('/', async (req, res) => {
  try {
    const artworkData = await getSomeArt();
    console.log(artworkData);
    res.render('index', { artworkData });    
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching artwork data.');
  }
});

app.get('/aboutme', (req, res) => {
  const pdfFilePath = '/images/resume.pdf';
  res.render('aboutme',{pdfFilePath: pdfFilePath} );
});

app.get('/contact', (req, res) => {
  res.render('contact');
});


const port = 5555; 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});