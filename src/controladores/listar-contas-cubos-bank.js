const { contas } = require('../bancodedados');

const listarContas = (req, res) => {

    const { senha_banco } = req.query;

    return res.status(200).json(contas);

};

module.exports = listarContas;