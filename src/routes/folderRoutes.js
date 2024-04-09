const express = require('express');
const router = express.Router();
const { fetchResourcesFromFolder } = require('../api/externalAPI');
const fetchAllFolders = require('../api/fetchAllFolder.js');

// API endpoint để lấy danh sách tài nguyên trong một folder cụ thể
router.get('/folders/:folderName', async (req, res) => {
  const { folderName } = req.params; // Lấy tên folder từ URL parameter

  try {
    // Gọi hàm fetchResourcesFromFolder và truyền tên folder vào như là tham số
    const data = await fetchResourcesFromFolder(folderName);
    res.json(data); // Trả về dữ liệu JSON cho client
  } catch (error) {
    console.error(error); // Ghi log lỗi để dễ dàng gỡ lỗi
    res.status(500).json({ error: "Server error", message: error.message });
  }
});

router.get('/folders', async (req, res) => {
    try {
      const folders = await fetchAllFolders();
      res.json(folders);
    } catch (error) {
      console.error('API error:', error);
      res.status(500).send('Internal Server Error');
    }
});
module.exports = router;
