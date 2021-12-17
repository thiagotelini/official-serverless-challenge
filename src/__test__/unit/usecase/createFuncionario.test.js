const Funcionario = require('../../../domain/funcionario.js');
const CreateFuncionario = require("../../../usecase/createFuncionario.js");
const funcionarioRepository = require("../../../repository/mysqlRepository");
const { expect } = require('@jest/globals');

test('Deve criar um novo Funcionario', async function () {
    const createFuncionarioUseCase = new CreateFuncionario(funcionarioRepository);
    const funcionario = new Funcionario('Thiago Telini', 21, 'Desenvolvedor');
    const novoFuncionario = await createFuncionarioUseCase.execute(funcionario);
    expect(novoFuncionario.id).toBeDefined();
});

test('Deve retornar um erro ao tentar criar um Funcionario duplicado', async function () {
    const createFuncionarioUseCase = new CreateFuncionario(funcionarioRepository);
    await createFuncionarioUseCase.execute(['Teste', 21, 'Desenvolvedor']);
    expect(await createFuncionarioUseCase.execute(['Teste', 21, 'Desenvolvedor'])).toThrow(Error);
});