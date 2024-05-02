API Bancária

Esta é uma API Rest bancária desenvolvida em JavaScript com Node.js, utilizando Git para controle de versão e Insomnia para testes de requisições.

Funcionalidades:

Listar todas as contas: Rota para listar todas as contas bancárias, requerendo autenticação com senha.

Criar uma conta: Rota para criar uma nova conta bancária iniciando com saldo zero, verificando se o CPF e/ou Email já estão cadastrados.

Atualizar uma conta: Rota para atualizar informações de uma conta bancária existente.

Excluir uma conta: Rota para excluir uma conta bancária existente.

Realizar saques: Rota para realizar saques em uma conta bancária, alterando o saldo da conta movimentada.

Realizar depósitos: Rota para realizar depósitos em uma conta bancária, alterando o saldo da conta movimentada.

Realizar transferências: Rota para realizar transferências entre contas bancárias, alterando o saldo das contas movimentadas. A operação não é realizada se não houver saldo suficiente.

Saldo atual: Rota para requisitar o saldo atual de uma conta, acessado pela senha do usuário.

Acessar extrato de transações: Rota para acessar o extrato de todas as transações de uma conta.

Requisitos:

Node.js

Git

Insomnia (ou qualquer outra ferramenta para testes de requisições REST)


