module.exports = {
    banco: {
        nome: 'Cubos Bank',
        numero: '123',
        agencia: '0001',
        senha: 'Cubos123Bank'
    },

    contas: [

        {
            numero: 1,
            saldo: 2000,
            usuario:
            {
                nome: 'Lucas Ramos',
                cpf: 14994506809,
                data_nascimento: '08/07/1986',
                telefone: '19998356054',
                email: 'sphlucasramos@gmail.com',
                senha: '12345',
            }

        },

        {
            numero: 2,
            saldo: 100000,
            usuario:
            {
                nome: 'Jhon Rambo',
                cpf: 12345678910,
                data_nascimento: '04/01/1984',
                telefone: '19999990000',
                email: 'rambo@gmail.com',
                senha: '12345',
            }
        }

    ],

    saques: [
        {
            data: '23/04/2024 | 11:27:07 PM GMT-3',
            numero_conta: 1,
            valor: 100000,
        },

        {
            data: '22/04/2024 | 12:42:38 PM GMT-3',
            numero_conta: 2,
            valor: 100000,
        }
    ],
    depositos: [
        {
            data: '20/04/2024 | 7:13:44 PM GMT-3',
            numero_conta: 1,
            valor: 2000
        },

        {
            data: '21/04/2024 | 9:28:36 AM GMT-3',
            numero_conta: 2,
            valor: 100000
        }
    ],
    transferencias: [
        {
            data: '23/04/2024 | 6:05:27 AM GMT-3',
            numero_conta_origem: 2,
            numero_conta_destino: 1,
            valor: 100000
        },

        {
            data: '22/04/2024 | 10:32:15 AM GMT-3',
            numero_conta_origem: 1,
            numero_conta_destino: 2,
            valor: 100000
        },
    ]
}