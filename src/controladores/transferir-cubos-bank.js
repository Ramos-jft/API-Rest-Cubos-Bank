const { contas, transferencias } = require('../bancodedados');

const { format } = require('date-fns');

const data = format(new Date(), "dd/MM/yyyy' '|' 'ppp");

const transferir = (req, res) => {

    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
        return res.status(404).json({ mensagem: 'Todos os campos devem ser preenchidos.' });
    };

    const contaExistenteOrigem = contas.find(conta => conta.numero === Number(req.body.numero_conta_origem));

    const contaExistenteDestino = contas.find(conta => conta.numero === Number(req.body.numero_conta_destino));

    if (!contaExistenteOrigem) {
        return res.status(404).json({ mensagem: 'Conta de origem da transferência não encontrada.' });
    };

    if (!contaExistenteDestino) {
        return res.status(404).json({ mensagem: 'Conta de destino da transferência não encontrada.' });
    };

    const senhaCorreta = contas.find(conta => conta.usuario.senha === req.body.senha);

    if (!senhaCorreta) {
        return res.status(401).json({ mensagem: 'Senha inválida.' });
    };

    if (contaExistenteOrigem.saldo <= valor) {
        return res.status(401).json({ mensagem: 'Saldo indisponível para transferência.' });
    };

    const novaTransferencia = {
        data: data,
        numero_conta_origem: numero_conta_origem,
        numero_conta_destino: numero_conta_destino,
        valor: valor
    };

    contaExistenteOrigem.saldo -= valor;

    contaExistenteDestino.saldo += valor;

    transferencias.push(novaTransferencia);

    return res.status(204).json();
};

module.exports = transferir;