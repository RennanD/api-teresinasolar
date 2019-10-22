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
    }],
    url: String

},{
    timestamps: true,
    toJSON: {
        virtuals: true
    }
})

ProjectSchema.pre('save', function() {
    if(!this.url){
        this.url = `${process.env.URL}/files/${this.thumbnail}`
    }
})

module.exports = model('Project', ProjectSchema)