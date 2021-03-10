const knex = require('../database')


module.exports = {
    async index(req, res) {
        const results = await knex('usuarios')

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { nome } = req.body
            const { endereco } = req.body

            await knex('usuarios')
            .insert({ nome, endereco })
            return res.status(201).send()

        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next){
        try {
            const { nome } = req.body
            const { endereco } = req.body
            const { id } = req.params

            await knex('usuarios')
                .update({ nome, endereco })
                .where({ id })
                return res.send()
        } catch (error) {
        next (error)
        }
    },
    async delete(req, res, next){
        try {
            const { id } = req.params

            await knex('usuarios')
            .where({ id })
            .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}