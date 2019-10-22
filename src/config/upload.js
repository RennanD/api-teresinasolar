require('dotenv').config()
const multer = require('multer')
const path =  require('path')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')

const storateTypes = {
    local:multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname)
            const name =  path.basename(file.originalname, ext)
            file.key = `${name}${ext}`
            cb(null, file.key)
        }
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'api-teresinasolar',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            const ext = path.extname(file.originalname)
            const name =  path.basename(file.originalname, ext)
            cb(null, `${name}${ext}`)
        }
    })
}

module.exports = {
    storage: storateTypes.s3
}