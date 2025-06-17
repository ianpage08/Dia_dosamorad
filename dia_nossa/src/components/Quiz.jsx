import { useState } from 'react'; // Importa o useState para gerenciar estados no React

// Lista de perguntas do quiz
const perguntas = [
  {
    pergunta: 'Qual é meu prato favorito?', // Texto da pergunta
    resposta: ['Batata Frita', 'Hamburguer', 'Pizza', 'Açai','Qualquer coisa que seja boa'], // Opções de resposta
    respostaCerta: 'Qualquer coisa que seja boa', // Resposta correta (uma string)
  },
  {
    pergunta: 'O que eu gosto de fazer no meu tempo livre?',
    resposta: ['Jogar', 'Ler', 'Treinar', 'Assistir'],
    respostaCerta: 'Jogar',
  },
  {
    pergunta: 'Qual é o jogo que mais gosto??',
    resposta: ['Resident Evil 4', 'Hollow Knigth', 'Hogwarts Legacy', 'God Of War'],
    respostaCerta: 'Resident Evil 4',
  },
  {
    pergunta: 'Qual atividade eu mais gosto de fazer com você?',
    resposta: ['Correr', 'Musculação', 'Calistenia', 'Andar'],
    respostaCerta: 'Musculação',
  },
  {
    pergunta: 'Qual minha cor favorita?',
    resposta: ['Azul', 'Vermelho', 'Rosa', 'Preto'],
    respostaCerta: 'Preto',
  },
  {
    pergunta: 'Qual parte do seu corpo você acha que eu mais gosto?',
    resposta: ['Bunda', 'Peito', 'Sorriso', 'Pernas', 'Tudo'],
    respostaCerta: 'Tudo',
  },
  {
    pergunta: 'Se eu fosse uma comida, eu seria:',
    resposta: ['Cuscuz com ovo: simples e maravilhoso', 'Sushi: requintado e fresco', 'Pizza: todo mundo gosta', 'Pimenta: só aguenta quem é forte'],
    respostaCerta: 'Pimenta: só aguenta quem é forte',
  },
  {
    pergunta: 'Qual é minha frase clássica?',
    resposta: ['Tô com fome!', 'Depois eu vejo isso…', 'Me lembrei de uma coisa nada a ver…', 'Só mais 5 minutinhos'],
    respostaCerta: 'Tô com fome!',
  }
];

// Componente principal do Quiz
export default function Quiz() {
  const [passo, setPasso] = useState(0); // Passo atual da pergunta (índice no array)
  const [acertos, setAcertos] = useState(0); // Contador de respostas corretas
  const [respondeu, setRespondeu] = useState(false); // Se o usuário já respondeu a pergunta atual
  const [respondeuCerto, setRespondeuCerto] = useState(null); // Armazena a resposta correta para comparar com a clicada

  // Função chamada ao clicar em uma resposta
  const handleClick = (opcao) => {
    const respostaCerta = perguntas[passo].respostaCerta; // Obtém a resposta correta da pergunta atual
    setRespondeu(true); // Marca que o usuário respondeu
    setRespondeuCerto(respostaCerta); // Armazena a resposta correta para estilização
    if (opcao === respostaCerta) {
      setAcertos(acertos + 1); // Se o usuário acertou, incrementa o contador
    }
  };

  // Avança para a próxima pergunta
  const proximaPergunta = () => {
    setPasso(passo + 1); // Vai para a próxima pergunta (incrementa o índice)
    setRespondeu(false); // Reseta o estado de resposta
    setRespondeuCerto(null); // Reseta a resposta correta
  };

  // Se todas as perguntas foram respondidas, mostra o resultado
  if (passo >= perguntas.length) {
    return (
      <div className="quiz text-center p-4 ">
        <div className="resultado p-4">
            <h2>Você acertou {acertos} de {perguntas.length}</h2>
            <p>
              {acertos === perguntas.length
                ? 'Parabéns, meu amor! Você Ganhou 10 Reais por me conhecer 💖'
                : 'Poxa vida! Não acertou tudo... vai ter que me dar um beijo de consolo! 😘'}
            </p>
        </div>
      </div>
    );
  }

  // Pega a pergunta atual com base no índice (passo)
  const atual = perguntas[passo];

  return (
    <div className="quiz text-center p-4 ">
      <div className="perguntas-quiz">
          <h1 className="pt-4 pb-4">💘 O quão bem você me conhece?</h1>
          <h2>{atual.pergunta}</h2>
          {/* Botões de respostas */}
          <div className="d-flex justify-content-center gap-3 align-items-center  p-4">
            {atual.resposta.map((opcao, index) => (
              <button
                key={index}
                className={`btn ${
                  respondeu
                    ? opcao === respondeuCerto
                      ? 'btn-success' // Verde se estiver certa
                      : 'btn-danger' // Vermelho se estiver errada
                    : 'btn-outline-primary' // Estilo neutro antes de responder
                } `}
                onClick={() => handleClick(opcao)} // Chama handleClick com a opção clicada
                disabled={respondeu} // Desativa o botão após responder
              >
                {opcao}
              </button>
            ))}
          </div>
          {/* Botão para próxima pergunta aparece só após resposta */}
          <div className='pb-4'>
              {respondeu && (
                <button className="btn btn-primary p-3 mt-4" onClick={proximaPergunta}>
                  Próxima Pergunta
                </button>
              )}
          </div>
      </div>
    </div>
  );
}
