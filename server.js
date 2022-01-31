const express = require('express');
const PORT = 4000;
const app = express();

const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
router(app);

app.listen(PORT, () => {
  console.log('Server on PORT', PORT);
});
