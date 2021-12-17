// Atualiza os dados do Funcionario
class UpdateFuncionario {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository; // recebe o repositorio referente ao DB ou memória local
    }

    async execute(funcionario){
        return await this.funcionarioRepository.updateFuncionario(funcionario); // faz update do registro com novos dados recebidos
    }
}

module.exports = UpdateFuncionario;