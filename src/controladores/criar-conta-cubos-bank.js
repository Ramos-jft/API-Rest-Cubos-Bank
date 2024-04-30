const { contas } = require('../bancodedados');

let numeroContaCriada = 3;

const criarConta = (req, res) => {

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

    const novaConta = {
        numero: numeroContaCriada,
        saldo: 0,
        usuario:
        {
            nome: nome,
            cpf: cpf,
            data_nascimento: data_nascimento,
            telefone: telefone,
            email: email,
            senha: senha
        }

    };

    numeroContaCriada++;

    contas.push(novaConta);

    return res.status(201).json();

};

module.exports = criarConta;