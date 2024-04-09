require('dotenv').config(); // Load environment variables
const cloudinary = require('cloudinary').v2;

// Cấu hình Cloudinary với các biến môi trường
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const axios = require('axios');


const fetchResourcesFromFolder = async (folderName) => {
    try {
      // Lấy ảnh
      const images = await cloudinary.api.resources({
        type: 'upload',
        prefix: folderName,
        resource_type: 'image', // Đặt loại tài nguyên là 'image'
        max_results: 10,
      });
  
      // Lấy file thô (ví dụ: Excel)
      const files = await cloudinary.api.resources({
        type: 'upload',
        prefix: folderName,
        resource_type: 'raw', // Đặt loại tài nguyên là 'raw'
        max_results: 10,
      });
  
      // Kết hợp kết quả từ cả ảnh và file
      const combinedResults = images.resources.concat(files.resources);
  
      return combinedResults; // Trả về kết hợp của ảnh và file
    } catch (error) {
      console.error('Error fetching resources from Cloudinary:', error);
      throw error;
    }
  };
  

module.exports = { fetchResourcesFromFolder };
