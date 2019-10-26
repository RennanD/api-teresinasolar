const routes = require('express').Router()
const multer = require('multer')
const Upload = require('./controllers/Upload')

const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)

routes.get('/projects', Upload.index)
routes.post('/projects', upload.single('file'), Upload.store)
routes.put('/projetcs/:id/update', upload.single('file'), Upload.update)
routes.delete('/projetcs/:id/delete', Upload.destroy)

module.exports = routes