const PORT = 3001;
const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./router');
const db = require('./models');

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await db.sequelize.sync();
    app.listen(PORT, () => {
      console.log('Server is running on Port 3001');
    });
  } catch (error) {
    console.log(error);
  }
}());
