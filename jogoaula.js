// Variáveis Globais
let vida = 30; // Vida inicial do jogador
let inventario = []; // Inventário inicial vazio
let emocoes = ["Determinação", "Experiência", "Inspiração", "Nostalgia"]; // Emoções necessárias para completar o jogo
let locaisExplorados = []; // Locais já explorados
let chances = 4; // Número de chances de explorar
let emocaoPerdida = null; // Emoção perdida
let itemRaroObtido = false; // Indica se o item raro foi obtido

// Função para exibir o status atual do jogador
function exibirStatus() {
    let barraVida = "❤️ Vida: [" + "█".repeat(vida / 2) + " ".repeat(15 - vida / 2) + "] " + vida + "/30";
    alert(`\n📊 **Status Atual** 📊\n\n${barraVida}\n🎒 Inventário: ${inventario.join(', ') || 'Vazio'}\n🔄 Chances restantes: ${chances}\n🎯 Objetivo: Coletar todas as emoções.`);
}
// Função para exibir a história de Yekta
function exibirHistoria() {
    alert(`\n📖 **História de Yekta Jamali** 📖\n\nYekta Jamali é uma atleta dedicada e determinada. Desde jovem, ela sempre sonhou em se destacar no esporte e inspirar outras pessoas. Com muito esforço e perseverança, Yekta conquistou várias medalhas e se tornou uma inspiração para muitos jovens atletas. Sua jornada é marcada por desafios, vitórias e o apoio incondicional de amigos, treinadores e familiares.`);
}

// Função para exibir as regras do jogo
function exibirRegras() {
    alert(`\n📜 **Como Jogar e Regras** 📜\n\nObjetivo do Jogo:\n- Coletar todas as emoções (Determinação, Experiência, Inspiração, Nostalgia) para completar a jornada de Yekta Jamali.\n\nComo Jogar:\n1. Exploração:\n- Você tem 4 chances para explorar diferentes locais: Academia, Competição, Vila Olímpica, Escola, Parque e Biblioteca.\n- Cada local pode ser explorado uma vez.\n- Você pode escolher entre o caminho principal ou um atalho. O atalho oferece a chance de encontrar itens raros, mas também pode resultar em perder uma emoção.\n\n2. Interação com NPCs:\n- Em cada local, você encontrará NPCs (treinador, amigo, repórter, atleta, bibliotecário, mentor) com quem pode interagir.\n- Interagir com NPCs pode resultar em ganhar emoções e vida.\n\n3. Gerenciamento de Vida:\n- Você começa com 30 de vida.\n- Ganhar ou perder vida depende das suas escolhas e interações.\n- Se a vida chegar a 0, o jogo termina.\n\n4. Recuperação de Emoções:\n- Se perder uma emoção, você pode recuperá-la ajudando alguém.\n- Escolha uma tarefa para ajudar e recupere a emoção perdida.\n\n5. Verificação de Emoções:\n- O jogo verifica se todas as emoções foram coletadas para determinar se você completou a jornada.\n\nDicas:\n- Escolha sabiamente entre o caminho principal e o atalho.\n- Interaja com os NPCs para ganhar emoções e vida.\n- Gerencie suas chances de exploração e vida cuidadosamente.\n\nFinal Secreto:\n- Obtenha o item raro para desbloquear um final secreto!\n\nEventos Aleatórios:\n- Durante a exploração, eventos aleatórios podem ocorrer, como encontrar um aliado inesperado ou enfrentar um desafio surpresa.`);
}

// Função para explorar locais
function explorar() {
    if (chances <= 0) {
        alert("Você não tem mais chances de explorar.");
        return;
    }

    let escolha = prompt(`\n🌍 **Menu de Exploração** 🌍\n\n1️⃣ Academia\n2️⃣ Competição\n3️⃣ Vila Olímpica\n4️⃣ Escola\n5️⃣ Parque\n6️⃣ Biblioteca\n7️⃣ Ver Status\n8️⃣ Ver História\n9️⃣ Recuperar Emoção\n\nEscolha um local ou opção:`);

    if (escolha === null) {
        alert("Escolha cancelada.");
        return;
    }

    if (escolha == 7) {
        exibirStatus();
        return;
    } else if (escolha == 8) {
        exibirHistoria();
        return;
    } else if (escolha == 9) {
        recuperarEmocao();
        return;
    }

    if (locaisExplorados.includes(escolha)) {
        alert("Você já explorou este local e não pode voltar.");
        return;
    }

    if (escolha == 1) {
        alert("Explorando a academia...");
        locaisExplorados.push(escolha);
        caminhoAcademia();
    } else if (escolha == 2) {
        alert("Explorando a competição...");
        locaisExplorados.push(escolha);
        caminhoCompeticao();
    } else if (escolha == 3) {
        alert("Explorando a vila olímpica...");
        locaisExplorados.push(escolha);
        caminhoVilaOlimpica();
    } else if (escolha == 4) {
        alert("Explorando a escola...");
        locaisExplorados.push(escolha);
        caminhoEscola();
    } else if (escolha == 5) {
        alert("Explorando o parque...");
        locaisExplorados.push(escolha);
        caminhoParque();
    } else if (escolha == 6) {
        alert("Explorando a biblioteca...");
        locaisExplorados.push(escolha);
        caminhoBiblioteca();
    } else {
        alert("Escolha inválida. Tente novamente.");
    }

    chances--;

    // Eventos Aleatórios
    if (Math.random() < 0.3) { // 30% de chance de um evento aleatório ocorrer
        eventoAleatorio();
    }
}

// Funções para diferentes caminhos
function caminhoAcademia() {
    let escolha = prompt("Você decidiu ir para a academia. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("treinador");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou um item raro no atalho!");
            coletarItem("Item Raro");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("treinador"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoAcademia();
    }
}

function caminhoCompeticao() {
    let escolha = prompt("Você decidiu ir para a competição. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("repórter");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou um item raro no atalho!");
            coletarItem("Item Raro");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("repórter"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoCompeticao();
    }
}

function caminhoVilaOlimpica() {
    let escolha = prompt("Você decidiu ir para a vila olímpica. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("atleta");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou um item raro no atalho!");
            coletarItem("Item Raro");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("atleta"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoVilaOlimpica();
    }
}
function caminhoEscola() {
    let escolha = prompt("Você decidiu ir para a escola. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("amigo");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou um item raro no atalho!");
            coletarItem("Item Raro");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("amigo"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoEscola();
    }
}

function caminhoParque() {
    let escolha = prompt("Você decidiu ir para o parque. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("mentor");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < .2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou um item raro no atalho!");
            coletarItem("Item Raro");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("mentor"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoParque();
    }
}

function caminhoBiblioteca() {
    let escolha = prompt("Você decidiu ir para a biblioteca. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("bibliotecário");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou um item raro no atalho!");
            coletarItem("Item Raro");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("bibliotecário"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoBiblioteca();
    }
}

// Função para interagir com NPCs
function interagirComNPC(npc) {
    alert(`Você encontrou um ${npc}. Deseja falar com ele?`);
    let resposta = prompt("Digite 'sim' ou 'não': ");

    if (resposta.toLowerCase() === 'sim') {
        if (npc === "treinador") {
            alert("Treinador: Yekta sempre foi dedicada e determinada. Você quer saber mais sobre seu treinamento?");
            let respostaTreinador = prompt("Digite 'sim' ou 'não': ");
            if (respostaTreinador.toLowerCase() === 'sim') {
                alert("Treinador: Yekta, parabéns por tudo que fez até hoje, por todas as quedas e vitórias. Mesmo nos momentos mais difíceis, você foi capaz de se levantar e lutar por aquilo que quer. Estou muito orgulhoso de você.\nYekta: Muito obrigado, treinador! Eu quem digo que foi um favor estar ao seu lado.");
                coletarItem("Determinação");
                ganharVida(10);
            } else {
                alert("Você decidiu não saber mais sobre o treinamento.");
            }
        } else if (npc === "amigo") {
            alert("Amigo de infância: Parabéns, Yekta, por tudo que você conquistou até agora. Você é um ídolo para nossa escola. Se tiver algum tempo, gostaria de falar com os outros depois.");
            let respostaAmigo = prompt("Digite 'sim' ou 'não': ");
            if (respostaAmigo.toLowerCase() === 'sim') {
                alert("Amigo: Quanto tempo, hein? Todos estávamos com saudades e orgulhosos de você.");
                coletarItem("Nostalgia");
                ganharVida(10);
            } else {
                alert("Você decidiu não falar mais com seu amigo.");
            }
        } else if (npc === "repórter") {
            alert("Repórter: Yekta, você fez história nos Jogos Asiáticos. Poderia me contar mais sobre sua jornada até aqui?");
            let respostaReporter = prompt("Digite 'sim' ou 'não': ");
            if (respostaReporter.toLowerCase() === 'sim') {
                alert("Repórter: Yekta ganhou várias medalhas e inspirou muitos jovens atletas.\nComo você se sente sendo uma inspiração para diversas pessoas?\nYekta: Eu me sinto muito grata e feliz por todos que me deram incentivo até aqui.");
                coletarItem("Experiência");
                ganharVida(10);
            } else {
                alert("Você decidiu não contar mais sobre sua jornada.");
            }
        } else if (npc === "atleta") {
            alert("Atleta: Yekta, você é uma inspiração para todos nós. Podemos conversar mais depois sobre como você me inspirou a ser quem eu sou?");
            let respostaAtleta = prompt("Digite 'sim' ou 'não': ");
            if (respostaAtleta.toLowerCase() === 'sim') {
                alert("Atleta: Yekta sempre ajuda e motiva seus colegas. Eu sabia que você toparia. Até depois.");
                coletarItem("Inspiração");
                ganharVida(10);
            } else {
                alert("Você decidiu não conversar mais com o atleta.");
            }
        } else if (npc === "bibliotecário") {
            alert("Bibliotecário: Yekta, você sempre foi uma ávida leitora. Gostaria de recomendar um livro que pode te inspirar ainda mais.");
            let respostaBibliotecario = prompt("Digite 'sim' ou 'não': ");
            if (respostaBibliotecario.toLowerCase() === 'sim') {
                alert("Bibliotecário: Este livro fala sobre a jornada de um atleta que superou muitos desafios. Espero que te inspire.");
                coletarItem("Inspiração");
                ganharVida(10);
            } else {
                alert("Você decidiu não pegar o livro.");
            }
        } else if (npc === "mentor") {
            alert("Mentor: Yekta, você tem um potencial incrível. Gostaria de compartilhar algumas dicas que podem te ajudar.");
            let respostaMentor = prompt("Digite 'sim' ou 'não': ");
            if (respostaMentor.toLowerCase() === 'sim') {
                alert("Mentor: Sempre acredite em si mesma e nunca desista, mesmo nos momentos mais difíceis.");
                coletarItem("Determinação");
                ganharVida(10);
            } else {
                alert("Você decidiu não ouvir as dicas do mentor.");
            }
        }
    } else {
        alert(`Você decidiu não falar com o ${npc}. Você não poderá voltar a este local e perdeu 10 de vida.`);
        perderVida(10);
    }
}


// Funções para ações
function ganharVida(valor) {
    vida += valor;
    vida = Math.min(vida, 30); // Garantir que a vida não ultrapasse 30
    exibirStatus();
    alert(`Você ganhou ${valor} de vida. Vida atual: ${vida}/30.`);
}

function perderVida(valor) {
    vida = Math.max(0, vida - valor);
    exibirStatus();
    alert(`Você perdeu ${valor} de vida. Vida atual: ${vida}/30.`);
}

function coletarItem(item) {
    inventario.push(item);
    alert(`${item} coletado!`);
}

function perderEmocao() {
    if (inventario.length > 0) {
        emocaoPerdida = inventario.pop();
        alert(`Você perdeu a emoção: ${emocaoPerdida}. Para recuperá-la, você precisa ajudar alguém.`);
    } else {
        perderVida(10);
        alert("Você não tinha emoções para perder, então perdeu 10 de vida.");
    }
}

function recuperarEmocao() {
    if (emocaoPerdida) {
        alert("Para recuperar sua emoção perdida, você precisa ajudar alguém.");
        let tarefa = prompt("Escolha uma tarefa para ajudar: (1) Ajudar a treinar, (2) Ajudar na padaria");

        if (tarefa == 1) {
            alert("Você ajudou alguém a treinar e recuperou sua emoção!");
            inventario.push(emocaoPerdida);
            emocaoPerdida = null;
        } else if (tarefa == 2) {
            alert("Você ajudou na padaria e recuperou sua emoção!");
            inventario.push(emocaoPerdida);
            emocaoPerdida = null;
        } else {
            alert("Escolha inválida. Tente novamente.");
            recuperarEmocao();
        }
    } else {
        alert("Você não tem nenhuma emoção perdida para recuperar.");
    }
}

// Função para verificar se todas as emoções foram coletadas
function verificarEmocoes() {
    for (let emocao of emocoes) {
        if (!inventario.includes(emocao)) {
            return false;
        }
    }
    return true;
}

// Função para eventos aleatórios
function eventoAleatorio() {
    let evento = Math.floor(Math.random() * 3); // Três tipos de eventos aleatórios

    if (evento === 0) {
        alert("Você encontrou um aliado inesperado que te ajudou a recuperar 10 de vida!");
        ganharVida(10);
    } else if (evento === 1) {
        alert("Você encontrou um desafio surpresa e perdeu 10 de vida.");
        perderVida(10);
    } else if (evento === 2) {
        alert("Você encontrou um item especial!");
        coletarItem("Item Especial");
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    exibirRegras();
    alert("Bem-vindo à jornada de Yekta Jamali!");

    while (vida > 0 && !verificarEmocoes() && chances > 0) {
        explorar();
    }

    if (verificarEmocoes()) {
        if (itemRaroObtido) {
            alert("Parabéns! Você coletou todas as emoções e encontrou o item raro, desbloqueando o final secreto da jornada de Yekta Jamali.");
            alert("Final Secreto: Com o item raro, Yekta descobre um novo talento oculto que a ajuda a alcançar ainda mais sucesso em sua carreira. Ela se torna uma lenda no esporte, inspirando gerações futuras com sua determinação e conquistas.");
        } else {
            alert("Parabéns! Você coletou todas as emoções e completou a jornada de Yekta Jamali.");
        }
        alert('Feito por: Guilherme Fortes');
    } else if (inventario.length === 2) {
        alert("Infelizmente, você não conseguiu coletar todas as emoções. Yekta se sente incompleta e triste por não ter conseguido falar com todos que a apoiaram.");
    } else {
        alert("Você não conseguiu completar a jornada de Yekta Jamali. Tente novamente.");
    }
    exibirStatus();
}

// Iniciar o jogo
iniciarJogo();
