const knexfile = require('../knexfile');
const database = require('knex')(knexfile);

class Tarefas {
  static async criarTarefa(tarefas) {
    try {
      const [id] = await database('tarefas').insert(tarefas);
      console.log('Tarefa criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarTarefa(id, tarefas) {
    try {
      const result = await database('livros').where({ id }).update(tarefas);
      console.log('Tarefa atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterTarefa(id) {
    try {
      const livro = await database('livros').where({ id }).first();
      console.log('Tarefa encontrado:', tarefas);
    } catch (error) {
      console.error('Erro ao obter tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async deleteTarefa(id) {
    try {
      const result = await database('livros').where({ id }).del();
      console.log('Tarefa excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Tarefas;