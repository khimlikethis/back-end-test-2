const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ dest: 'uploads/' })

  app.post('/upload-file', upload.single('file'), function (req, res, next) {

    if (!req.file) return res.status(422).json({ error: "Please select a file" });
    const payload = req.file;
    
    console.log(payload);
    const result = {
      fileName: payload.originalname,
      size: payload.size,
      extension: payload.mimetype
    };
  
    res.status(200).json(result);
  })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});