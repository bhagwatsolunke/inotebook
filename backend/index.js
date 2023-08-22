const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello bhagwat!');
});

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Sync Sequelize models with the database
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`iNotebook Backend listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
