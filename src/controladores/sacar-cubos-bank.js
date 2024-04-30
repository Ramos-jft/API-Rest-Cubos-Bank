const { contas, saques } = require('../bancodedados');

const { format } = require('date-fns');

const data = format(new Date(), "dd/MM/yyyy' '|' 'ppp");

const sacar = (req, res) => {

    const { numero_conta, valor, senha } = req.body;

    if (!numero_conta || !valor || !senha) {
        return res.status(404).json({ mensagem: 'Todos os campos devem ser preenchidos.' });
    };

    const contaExistente = contas.find(conta => conta.numero === Number(req.body.numero_conta));

    if (!contaExistente) {
        return res.status(404).json({ mensagem: 'Conta não encontrada.' });
    };

    if (valor > contaExistente.saldo) {
        return res.status(401).json({ mensagem: 'Valor indisponível para saque.' });
    };

    const senhaCorreta = contas.find(conta => conta.usuario.senha === req.body.senha);

    if (!senhaCorreta) {
        return res.status(401).json({ mensagem: 'Senha inválida.' });
    };

    contaExistente.saldo -= valor;

    const novoSaque = {
        data: data,
        numero_conta: numero_conta,
        valor: valor
    };

    saques.push(novoSaque);

    return res.status(204).json();

};

module.exports = sacar;