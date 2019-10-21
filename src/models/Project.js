const { Schema, model } = require('../database')

const ProjectSchema = new Schema({

    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    descs: [{
        type: String,
        required: true
    }]

},{
    timestamps: true,
    toJSON: {
        virtuals: true
    }
})

ProjectSchema.virtual('file_url').get(function(){
    return `${process.env.URL}/files/${this.thumbnail}`
})

module.exports = model('Project', ProjectSchema)