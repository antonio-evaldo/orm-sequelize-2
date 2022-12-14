const database = require('../models');

class TurmaController {
    static async obtemTodasAsTurmas(req, res) {
        try {
            const todasAsTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasAsTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async obtemUmaTurma(req, res) {
        const { id } = req.params;

        try {
            const turma = await database.Turmas.findOne({ where: { id: Number(id) } });

            return res.status(200).json(turma);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body;

        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma);
            return res.status(201).json(novaTurmaCriada);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            await database.Turmas.update(novasInfos, { where: { id: Number(id) } });

            const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(id) } });

            return res.status(200).json(turmaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaTurma(req, res) {
        const { id } = req.params;

        try {
            await database.Turmas.destroy({ where: { id: Number(id) } });
            return res.status(201).json({ mensagem: `Turma de id ${id} deletada!` });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;