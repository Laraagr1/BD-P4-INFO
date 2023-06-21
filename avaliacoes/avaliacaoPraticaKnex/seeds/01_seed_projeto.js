/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex('projeto')
    .del()
    .then(function() {
      return knex('projeto').insert([
        { nome_projeto: 'calculadora' , descricao: 'uma calculadora feita em java', prazo: '21/06/2023' },
      ]);
  })
};
