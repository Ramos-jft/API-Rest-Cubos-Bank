const express = require('express');

const rotas = express();

const validarSenha = require('./intermediarios');

const listarContas = require('./controladores/listar-contas-cubos-bank');

const criarConta = require('./controladores/criar-conta-cubos-bank');

const atualizarConta = require('./controladores/atualizar-conta-cubos-bank');

const excluirConta = require('./controladores/excluir-conta-cubos-bank');

const depositar = require('./controladores/depositar-cubos-bank');

const sacar = require('./controladores/sacar-cubos-bank');

const transferir = require('./controladores/transferir-cubos-bank');

const saldo = require('./controladores/saldo-cubos-bank');

const extrato = require('./controladores/extrato-cubos-bank');

rotas.get('/contas', validarSenha, listarContas);

rotas.post('/contas', criarConta);

rotas.put('/contas/:numero/usuario', atualizarConta);

rotas.delete('/contas/:numero', excluirConta);

rotas.post('/transacoes/depositar', depositar);

rotas.post('/transacoes/sacar', sacar);

rotas.post('/transacoes/transferir', transferir);

rotas.get('/contas/saldo', saldo);

rotas.get('/contas/extrato', extrato);

module.exports = rotas;