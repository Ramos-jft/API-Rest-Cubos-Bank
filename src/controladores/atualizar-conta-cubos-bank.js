const { contas } = require('../bancodedados');

const atualizarConta = (req, res) => {

    const { numero } = req.params;

    const contaExistente = contas.find(conta => conta.numero === Number(req.params.numero));

    if (!contaExistente) {
        return res.status(404).json({ mensagem: 'Conta não encontrada.' });
    };

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser informados.' })
    };

    const cpfExistente = contas.find(conta => conta.usuario.cpf === Number(req.body.cpf));

    if (cpfExistente) {
        return res.status(404).json({ mensagem: 'Já existe uma conta com este CPF.' });
    };

    const emailExistente = contas.find(conta => conta.usuario.email === req.body.email);

    if (emailExistente) {
        return res.status(404).json({ mensagem: 'Já existe uma conta com este e-mail.' });
    };

    contaExistente.usuario.nome = nome;
    contaExistente.usuario.cpf = cpf;
    contaExistente.usuario.data_nascimento = data_nascimento;
    contaExistente.usuario.telefone = telefone;
    contaExistente.usuario.email = email;
    contaExistente.usuario.senha = senha;

    return res.status(201).json();

};

module.exports = atualizarConta;