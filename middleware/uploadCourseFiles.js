const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dest;
    if (file.fieldname === 'thumbnail') {
      dest = path.join(__dirname, '../uploads/');
    } else if (file.fieldname === 'videos') {
      dest = path.join(__dirname, '../uploads/videos/');
    } else {
      return cb(new Error('Invalid field name'), null);
    }
    // Ensure directory exists
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'thumbnail') {
    // Only allow images
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed for thumbnail'));
    }
  } else if (file.fieldname === 'videos') {
    // Only allow videos
    const allowedTypes = /mp4|mov|avi|mkv|webm/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.test(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed for videos'));
    }
  } else {
    cb(new Error('Unexpected field'));
  }
};

const uploadCourseFiles = multer({
  storage,
  fileFilter,
  limits: { fileSize: 500 * 1024 * 1024 } // 500MB max for videos
});

module.exports = uploadCourseFiles; 