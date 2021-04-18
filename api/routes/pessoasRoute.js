const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const MatriculasController = require('../controllers/MatriculaController')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .post('/pessoas', PessoaController.criaPessoa)
  .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)

  .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.pegaUmaMatricula)
  .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
  .get('/pessoas/matricula/:turmaId/confirmadas', MatriculasController.pegaMatriculasPorTurma)
  .get('/pessoas/matricula/lotada', MatriculasController.pegaTurmasLotadas)
  .post('/pessoas/:estudanteId/matricula', MatriculasController.criaMatricula)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculasController.restauraMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.atualizaMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.apagaMatricula)

module.exports = router