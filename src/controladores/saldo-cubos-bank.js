const { contas } = require('../bancodedados');

const { format } = require('date-fns');

const data = format(new Date(), "dd/MM/yyyy' '|' 'ppp");

const saldo = (req, res) => {
    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
        return res.status(404).json({ mensagem: 'Todos os campos devem ser preenchidos.' });
    };

    const contaExistente = contas.find(conta => conta.numero === Number(req.query.numero_conta));

    if (!contaExistente) {
        return res.status(404).json({ mensagem: 'Conta não encontrada.' });
    };

    const senhaCorreta = contas.find(conta => conta.usuario.senha === req.query.senha);

    if (!senhaCorreta) {
        return res.status(401).json({ mensagem: 'Senha inválida.' });
    };

    const novoSaldo = {
        data: data,
        saldo: contaExistente.saldo
    };

    return res.status(200).json(novoSaldo);

};

module.exports = saldo;