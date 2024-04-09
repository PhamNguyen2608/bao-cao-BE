require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Cấu hình Cloudinary với các biến môi trường
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Hàm lấy tất cả các folder gốc
const fetchAllFolders = async () => {
  try {
    const result = await cloudinary.api.root_folders();
    return result.folders; // Trả về danh sách các folder gốc
  } catch (error) {
    console.error('Error fetching folders from Cloudinary:', error);
    throw error;
  }
};

module.exports = fetchAllFolders;
