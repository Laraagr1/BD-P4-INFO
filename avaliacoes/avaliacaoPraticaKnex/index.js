const Projeto = require('./models/Projeto');
const projetos = require('./models/Projeto');
const Tarefas = require('./models/Tarefas');

const ExemploTarefas = {
    nome_tarefa: 'Criar Botão Somar', 
    descricao: 'Criar um botão de somar na calculadora',
    status: 'Em progresso', 
    responsavel: 'Lara',
  };

console.log('Banco de Dados')
Tarefas.criarTarefa(ExemploTarefas)