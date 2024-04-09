const express = require('express');
const folderRoutes = require('./src/routes/folderRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Kích hoạt CORS cho tất cả các request
app.use(cors());

// Sử dụng folderRoutes cho tất cả các yêu cầu gửi tới "/api"
app.use('/api', folderRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Bắt đầu lắng nghe trên port chỉ định
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
