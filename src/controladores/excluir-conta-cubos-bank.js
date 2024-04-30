let { contas } = require('../bancodedados');

const excluirConta = (req, res) => {

    let { numero } = req.params;

    const contaExistente = contas.find(conta => conta.numero === Number(req.params.numero));

    if (!contaExistente) {
        return res.status(404).json({ mensagem: 'Conta não encontrada.' });
    };

    if (contaExistente.saldo > 0) {
        return res.status(404).json({ mensagem: 'Não é permitida a exclusão de conta com saldo positivo!' });
    };

    contas = contas.splice(contas.indexOf(contaExistente), 1);

    return res.status(204).json();

};

module.exports = excluirConta;