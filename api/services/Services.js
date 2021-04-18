const database = require('../models');

class Services {
  constructor(nomeDoModulo) {
    this.nomeDoModulo = nomeDoModulo
  }

  async pegatodosOsRegistros(where = {}) {
    return database[this.nomeDoModulo].findAll({ where: { ...where } });
  }

  async pegaUmRegistro(where = {}) {
    return database[this.nomeDoModulo].findOne({ where: { ...where } });
  }

  async criaRegistro(dados) {
    return database[this.nomeDoModulo].create(dados);
  }

  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return database[this.nomeDoModulo]
      .update(dadosAtualizados, { where: { id: id } }, transacao);
  }

  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return database[this.nomeDoModulo]
      .update(dadosAtualizados, { where: { ...where } }, transacao);
  }

  async apagaRegistro(where = {}) {
    return database[this.nomeDoModelo].destroy({ where: { ...where } })
  }

  async restauraRegistro(where = {}) {
    return database[this.nomeDoModelo].restore({ where: { ...where } })
  }

  async consultaRegistroApagado(where = {}) {
    return database[this.nomeDoModelo]
      .findOne({ paranoid: false, where: { ...where } })
  }

  async encontraEContaRegistros(where = {}, agregadores) {
    return database[this.nomeDoModelo]
      .findAndCountAll({ where: { ...where }, ...agregadores })
  }
}

module.exports = Services;