const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = process.env.PORT || 8000;
const Favorite = require('./model/fav'); // Import the Favorite model

require('./db/conn'); // Assuming this sets up the database connection

app.use(express.json()); // to get the data in JSON format

// Use the cors middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

app.post('/api/favorites', async (req, res) => {
  try {
    const { title, year, type } = req.body;
    const favorite = new Favorite({ title, year, type });
    await favorite.save();
    res.status(201).send(favorite);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get('/api/getfavorites', async (req, res) => {
    try {
      const favorites = await Favorite.find();
      res.status(200).json(favorites);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.listen(port, () => {
  console.log(`listening on http://127.0.0.1:${port}`);
});
