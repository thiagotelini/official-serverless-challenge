const GetFuncionario = require("../../../usecase/getFuncionario.js");
const funcionarioRepository = require("../../../repository/mysqlRepository");
const { expect } = require('@jest/globals');

test('Deve visualizar o Funcionario com id 1', async function () {
    const getFuncionarioUseCase = new GetFuncionario(funcionarioRepository);
    const funcionario = await getFuncionarioUseCase.execute({id: 1});
    expect(funcionario).toBeDefined();
});