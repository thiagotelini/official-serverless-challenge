// Distribui as solicitações para os usecases
const Funcionario = require("../domain/funcionario.js");
const CreateFuncionario = require("../usecase/createFuncionario.js");
const GetFuncionario = require("../usecase/getFuncionario.js");
const UpdateFuncionario = require("../usecase/updateFuncionario.js");
const DeleteFuncionario = require("../usecase/deleteFuncionario.js");
const funcionarioRepository = require("../repository/mysqlRepository.js");

const createFuncionarioUseCase = new CreateFuncionario(funcionarioRepository); // instancia o usecase utilizando o repositório
const getFuncionarioUseCase = new GetFuncionario(funcionarioRepository); // instancia o usecase utilizando o repositório
const updateFuncionarioUseCase = new UpdateFuncionario(funcionarioRepository); // instancia o usecase utilizando o repositório
const deleteFuncionarioUseCase = new DeleteFuncionario(funcionarioRepository); // instancia o usecase utilizando o repositório

async function createFuncionario(params, body) {
    const funcionarioData = body; // atribui request.body
    const funcionario = new Funcionario(funcionarioData.nome, funcionarioData.idade, funcionarioData.cargo);
    const novoFuncionario = await createFuncionarioUseCase.execute(funcionario); // executa método do usecase
    return novoFuncionario;
}

async function getFuncionario(params, body) {
    const funcionarioId = params; // atribui request.params
    const funcionarios = await getFuncionarioUseCase.execute(funcionarioId); // executa método do usecase
    return funcionarios;
}

async function updateFuncionario(params, body) {
    const funcionarioData = body; // atribui request.body
    funcionarioData.id = params.id; // atribui request.params
    return await updateFuncionarioUseCase.execute(funcionarioData); // executa método do usecase
}

async function deleteFuncionario(params, body) {
    const funcionarioId = params; // atribui request.params
    return await deleteFuncionarioUseCase.execute(funcionarioId); // executa método do usecase
}

module.exports = {
    createFuncionario,
    getFuncionario,
    updateFuncionario,
    deleteFuncionario
}