// Gerencia as Querys do Banco de Dados
const connect = require('../infra/database.js');
//const connection = connect.connec// realiza a conexão implementada externamente

async function createFuncionario(funcionario) { // Create
    try {
        const connection = await connect.connect()
        return await connection.query(
            'INSERT INTO Funcionario(funcionarioNome, funcionarioIdade, funcionarioCargo) VALUES (?,?,?)',
            [funcionario.nome, funcionario.idade, funcionario.cargo]
        )
    } catch (error) {
        return error;
    }
}

async function getFuncionarioByName(nome){ // Verifica duplicidade
    try {
        const connection = await connect.connect()
        const [rows] = await connection.query(
            'SELECT * FROM Funcionario WHERE funcionarioNome = ?',
            [nome]
        )
        return rows[0]

    } catch (error) {
        return error;
    }
}

async function getFuncionario(id){ //Read 
    try {
        const connection = await connect.connect()
        const [rows] = await connection.query(
            'SELECT * FROM Funcionario WHERE funcionarioId = ?',
            [id]
        )
        return rows[0]

    } catch (error) {
        return error
    }
}

async function updateFuncionario(funcionario){ //Update
    try{
        const connection = await connect.connect()
        return await connection.query(
            'UPDATE Funcionario SET funcionarioNome = ?, funcionarioIdade = ?, funcionarioCargo = ? WHERE funcionarioId = ?',
            [funcionario.nome, funcionario.idade, funcionario.cargo, funcionario.id]
        )
    } catch (error) {
        return error;
    }
}

async function deleteFuncionario(funcionario){ // Delete
    try{
        const connection = await connect.connect()
        return await connection.query(
            'DELETE FROM Funcionario WHERE funcionarioId = ?',
            [funcionario.id]
        )
    } catch (error) {
        return error;
    }
}

module.exports = {
    createFuncionario,
    getFuncionarioByName,
    getFuncionario,
    updateFuncionario,
    deleteFuncionario
}