const { contas, depositos, saques, transferencias } = require('../bancodedados');

const extrato = (req, res) => {

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

    const deposito = depositos.filter(usuario => usuario.numero_conta === Number(numero_conta));

    const saque = saques.filter(usuario => usuario.numero_conta === Number(numero_conta));

    const transferenciaEnviada = transferencias.filter(usuario =>
        usuario.numero_conta_origem === Number(numero_conta));

    const transferenciaRecebida = transferencias.filter(usuario =>
        usuario.numero_conta_destino === Number(numero_conta));

    const novoExtrato = {
        depositos: deposito,
        saques: saque,
        transferenciasEnviadas: transferenciaEnviada,
        transfenciasRecebidas: transferenciaRecebida
    };

    return res.status(200).json(novoExtrato);

};

module.exports = extrato;