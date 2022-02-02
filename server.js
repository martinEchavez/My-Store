const express = require('express');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const PORT = 4000;
const app = express();

const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
router(app);

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Server on PORT', PORT);
});
