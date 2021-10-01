const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage/imgs')
    },
    filename: function (req, file, cb) {
    //   cb(null, file.fieldname + '-' + Date.now())
    //   cb(null, `${file.fieldname}-${Date.now()}`)
    cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
const upload = multer({ storage })

module.exports = upload