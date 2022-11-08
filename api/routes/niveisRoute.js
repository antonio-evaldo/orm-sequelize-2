const { Router } = require('express')
const NivelController = require('../controllers/NivelController.js');

const router = Router();

router
    .get('/niveis', NivelController.obtemTodosOsNiveis)
    .get('/niveis/:id', NivelController.obtemUmNivel)
    .post('/niveis', NivelController.criaNivel)
    .put('/niveis/:id', NivelController.atualizaNivel)
    .delete('/niveis/:id', NivelController.apagaNivel)

module.exports = router;