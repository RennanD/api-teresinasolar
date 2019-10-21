const Projetc = require('../models/Project')

module.exports = {

    async index(req, res) {

        const projects = await Projetc.find()

        try {
            
            if(!projects) return res.json({data: "Não há projetos há serem exibidos."})

            return res.json(projects)
 
        } catch (error) {
            
            return res.json({data: "Não foi possível se conectar à base de dados!"})

        }

    },

    async store(req, res) {

        const { filename: thumbnail } = req.file
        
        const { title, descs } = req.body

        try {
            
            await Projetc.create({
                thumbnail,
                title,
                descs: descs.split('-').map(desc => desc.trim())
            })

            return res.json({succses: "Projeto cadastrado com sucesso"})

        } catch (err) {
            console.log(err);
            
            return res.json({error: "Verifique se todos os campos estão preenchidos!"})
        }

    },

    async update(req, res) {

        const { id } = req.params
        const { filename: thumbnail } = req.file
        const { title, descs } = req.body

        try {
            
            const project = await Projetc.findById(id)

            if(!project) return res.json({data: "O Projeto não existe na base de dados"})

            await Projetc.findByIdAndUpdate(id,{
                thumbnail,
                title,
                descs: descs.split('-').map(desc => desc.trim())
            })

            return res.json({succses: "Atualizado com sucesso!"})

        } catch (err) {
            
            return res.json({error: "Não foi posivel atualizar os dados!"})

        }

    }

}