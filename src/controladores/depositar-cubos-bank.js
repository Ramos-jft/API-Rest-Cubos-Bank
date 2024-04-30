const { contas, depositos } = require('../bancodedados');

const { format } = require('date-fns');

const data = format(new Date(), "dd/MM/yyyy' '|' 'ppp");

const depositar = (req, res) => {

    const { numero_conta, valor } = req.body;

    if (!numero_conta) {
        return res.status(404).json({ mensagem: 'Todos os campos devem ser preenchidos.' });
    };

    const contaExistente = contas.find(conta => conta.numero === Number(req.body.numero_conta));

    if (!contaExistente) {
        return res.status(404).json({ mensagem: 'Conta não encontrada.' });
    };

    if (valor <= 0) {
        return res.status(404).json({ mensagem: 'O valor deve ser maior que R$ 0,00.' });
    };

    contaExistente.saldo += valor;

    const novoDeposito = {
        data: data,
        numero_conta: numero_conta,
        valor: valor
    };

    depositos.push(novoDeposito);

    return res.status(204).json();

};

module.exports = depositar;