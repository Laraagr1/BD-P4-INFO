/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex('tarefas')
    .del()
    .then(function() {
      return knex('tarefas').insert([
        { nome_tarefa: 'Criar Botão Somar' , descricao: 'Criar um botão de somar na calculadora', status: 'Em progresso', responsavel: 'Lara' },
      ]);
  })
};
