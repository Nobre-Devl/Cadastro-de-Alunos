const prompt = require("prompt-sync")();

let alunos = [];
let proximoId = 1;

function cadastrarAluno() {
    console.log("\n--- Cadastro de Novo Aluno ---");
    const nome = prompt("Digite o nome do aluno: ");
    const curso = prompt("Digite o curso do aluno: ");

    if (nome.trim() !== "" && curso.trim() !== "") {
        const novoAluno = {
            id: proximoId,
            nome: nome,
            curso: curso
        };
        alunos.push(novoAluno);
        proximoId++;
        console.log("✅ Aluno cadastrado com sucesso!");
    } else {
        console.log("❌ Nome ou curso inválido. Cadastro cancelado.");
    }
}

function listarAlunos() {
    console.log("\n--- Lista de Alunos Cadastrados ---");
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
    } else {
        alunos.forEach((aluno, index) => {
            console.log(`${index + 1}. ID: ${aluno.id} | Nome: ${aluno.nome} | Curso: ${aluno.curso}`);
        });
    }
}

function atualizarAluno() {
    listarAlunos();
    if (alunos.length === 0) return;

    const num = parseInt(prompt("Digite o número do aluno que deseja atualizar: "));

    if (num > 0 && num <= alunos.length) {
        const indice = num - 1;
        console.log(`Atualizando dados de: ${alunos[indice].nome}`);

        const novoNome = prompt(`Digite o novo nome (ou deixe em branco para manter "${alunos[indice].nome}"): `);
        const novoCurso = prompt(`Digite o novo curso (ou deixe em branco para manter "${alunos[indice].curso}"): `);

        if (novoNome.trim() !== "") {
            alunos[indice].nome = novoNome;
        }
        if (novoCurso.trim() !== "") {
            alunos[indice].curso = novoCurso;
        }

        console.log("✅ Aluno atualizado com sucesso!");
    } else {
        console.log("❌ Número inválido.");
    }
}

function removerAluno() {
    listarAlunos();
    if (alunos.length === 0) return;

    const num = parseInt(prompt("Digite o número do aluno que deseja remover: "));

    if (num > 0 && num <= alunos.length) {
        const indice = num - 1;
        const removido = alunos.splice(indice, 1);
        console.log(`✅ Aluno "${removido[0].nome}" removido com sucesso!`);
    } else {
        console.log("❌ Número inválido.");
    }
}

function menu() {
    let opcao;
    do {
        console.log("\n===== Sistema de Cadastro de Alunos =====");
        console.log("1. Cadastrar Aluno");
        console.log("2. Listar Alunos");
        console.log("3. Atualizar Aluno");
        console.log("4. Remover Aluno");
        console.log("5. Sair");
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                cadastrarAluno();
                break;
            case "2":
                listarAlunos();
                break;
            case "3":
                atualizarAluno();
                break;
            case "4":
                removerAluno();
                break;
            case "5":
                console.log("Encerrando o programa...");
                break;
            default:
                console.log("Opção inválida. Por favor, tente novamente.");
        }
    } while (opcao !== "5");
}

menu();