export const learningTracks = [
  {
    id: 'logic',
    title: 'Lógica de programação',
    description: 'Aprenda variáveis, condições, repetições e pensamento computacional.',
    difficulty: 'Iniciante',
    color: 'from-rose-200 to-orange-200',
    lessons: [
      {
        id: 'logic-001',
        title: 'Primeiro algoritmo',
        reward: 10,
        question: 'Escreva os passos para mostrar a mensagem "Olá, mundo!" na tela.',
        examples: ['Entrada: nenhuma', 'Saída esperada: Olá, mundo!'],
        starterCode: 'mostrar("Olá, mundo!")',
        answer: 'mostrar("Olá, mundo!")',
        hint: 'Use a ação mostrar com o texto entre aspas.',
        explanation: 'Um algoritmo é uma sequência de passos para resolver um problema.'
      },
      {
        id: 'logic-002',
        title: 'Condição simples',
        reward: 10,
        question: 'Complete a regra: se pontos for maior ou igual a 100, retorne "subiu de nível".',
        examples: ['pontos = 120 retorna "subiu de nível"'],
        starterCode: 'se pontos >= 100 então',
        answer: 'retorne "subiu de nível"',
        hint: 'A resposta precisa retornar o texto pedido.',
        explanation: 'Condições ajudam o programa a tomar decisões.'
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Crie suas primeiras variáveis, funções e regras na linguagem da web.',
    difficulty: 'Iniciante',
    color: 'from-yellow-200 to-amber-200',
    lessons: [
      {
        id: 'js-001',
        title: 'Variáveis e tipos',
        reward: 10,
        question: 'Crie uma variável chamada nome com o valor "Aarley".',
        examples: ['let curso = "JavaScript"'],
        starterCode: '// escreva sua resposta aqui',
        answer: 'let nome = "Aarley"',
        hint: 'Use let, o nome da variável e uma string entre aspas.',
        explanation: 'Variáveis guardam valores. Em JavaScript, let declara uma variável que pode mudar depois.'
      },
      {
        id: 'js-002',
        title: 'Função soma',
        reward: 10,
        question: 'Complete a função para retornar a soma de dois números.',
        examples: ['somar(2, 3) retorna 5'],
        starterCode: 'function somar(a, b) {\n  // escreva seu código aqui\n}',
        answer: 'return a + b',
        hint: 'Use return com o operador +.',
        explanation: 'Funções recebem parâmetros e podem retornar um resultado usando return.'
      },
      {
        id: 'js-003',
        title: 'Condição if/else',
        reward: 10,
        question: 'Retorne "maior" se idade for maior ou igual a 18.',
        examples: ['idade = 19 retorna "maior"'],
        starterCode: 'function verificarIdade(idade) {\n  // escreva seu código aqui\n}',
        answer: 'if (idade >= 18) return "maior"',
        hint: 'Use if com >= 18.',
        explanation: 'Condições permitem executar código apenas quando uma regra é verdadeira.'
      }
    ]
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Pratique uma sintaxe amigável para automação, dados e backend.',
    difficulty: 'Iniciante',
    color: 'from-sky-200 to-cyan-200',
    lessons: [
      {
        id: 'py-001',
        title: 'Variáveis em Python',
        reward: 10,
        question: 'Crie uma variável chamada linguagem com o valor "Python".',
        examples: ['nome = "Ada"'],
        starterCode: '# escreva sua resposta aqui',
        answer: 'linguagem = "Python"',
        hint: 'Em Python não precisa usar let ou const.',
        explanation: 'Python usa uma sintaxe simples: nome_da_variavel = valor.'
      },
      {
        id: 'py-002',
        title: 'Função em Python',
        reward: 10,
        question: 'Crie uma função chamada somar que retorna a + b.',
        examples: ['def dobro(n):\n    return n * 2'],
        starterCode: 'def somar(a, b):\n    # escreva seu código aqui',
        answer: 'return a + b',
        hint: 'Dentro da função, use return.',
        explanation: 'Funções em Python usam def e indentação para definir o bloco.'
      }
    ]
  },
  {
    id: 'sql',
    title: 'SQL',
    description: 'Consulte, filtre e conecte dados em tabelas.',
    difficulty: 'Essencial',
    color: 'from-emerald-200 to-teal-200',
    lessons: [
      {
        id: 'sql-001',
        title: 'SELECT básico',
        reward: 10,
        question: 'Busque todos os campos da tabela usuários.',
        examples: ['SELECT * FROM produtos;'],
        starterCode: '-- escreva sua query aqui',
        answer: 'SELECT * FROM usuarios;',
        hint: 'Use SELECT * FROM nome_da_tabela;',
        explanation: 'SELECT busca dados. O * indica todas as colunas da tabela.'
      },
      {
        id: 'sql-002',
        title: 'WHERE',
        reward: 10,
        question: 'Busque usuários com idade maior que 18.',
        examples: ['WHERE status = "ativo";'],
        starterCode: 'SELECT * FROM usuarios\n-- complete aqui',
        answer: 'WHERE idade > 18;',
        hint: 'WHERE filtra linhas por condição.',
        explanation: 'WHERE limita os resultados usando uma regra.'
      },
      {
        id: 'sql-003',
        title: 'JOIN',
        reward: 15,
        question: 'Una usuários e pedidos usando usuarios.id = pedidos.usuario_id.',
        examples: ['JOIN perfis ON usuarios.id = perfis.usuario_id;'],
        starterCode: 'SELECT * FROM usuarios\n-- complete aqui',
        answer: 'JOIN pedidos ON usuarios.id = pedidos.usuario_id;',
        hint: 'Use JOIN tabela ON chave = chave.',
        explanation: 'JOIN conecta dados de tabelas relacionadas.'
      }
    ]
  },
  {
    id: 'git',
    title: 'Git/GitHub',
    description: 'Controle versões, salve commits e publique projetos.',
    difficulty: 'DevTools',
    color: 'from-slate-200 to-zinc-200',
    lessons: [
      {
        id: 'git-001',
        title: 'Salvar alterações',
        reward: 10,
        question: 'Qual comando cria um commit com a mensagem "início"?',
        examples: ['git commit -m "mensagem"'],
        starterCode: 'git ...',
        answer: 'git commit -m "inicio"',
        hint: 'Use git commit -m.',
        explanation: 'Commits salvam um ponto no histórico do projeto.'
      },
      {
        id: 'git-002',
        title: 'Enviar para o GitHub',
        reward: 10,
        question: 'Qual comando envia a branch main para o remoto origin?',
        examples: ['git push origin minha-branch'],
        starterCode: 'git ...',
        answer: 'git push origin main',
        hint: 'Use git push com remoto e branch.',
        explanation: 'O push envia commits locais para um repositório remoto.'
      }
    ]
  },
  {
    id: 'apis',
    title: 'APIs',
    description: 'Entenda métodos HTTP, endpoints e respostas JSON.',
    difficulty: 'Backend',
    color: 'from-violet-200 to-indigo-200',
    lessons: [
      {
        id: 'apis-001',
        title: 'Método HTTP',
        reward: 10,
        question: 'Qual método HTTP geralmente é usado para buscar dados?',
        examples: ['GET /usuarios'],
        starterCode: 'Digite o método',
        answer: 'GET',
        hint: 'É o método de leitura.',
        explanation: 'GET é usado para solicitar dados de um recurso.'
      },
      {
        id: 'apis-002',
        title: 'JSON',
        reward: 10,
        question: 'Complete um objeto JSON com a chave nome e o valor "coda-aí".',
        examples: ['{ "ativo": true }'],
        starterCode: '{\n  \n}',
        answer: '"nome": "coda-aí"',
        hint: 'JSON usa chave e valor entre aspas.',
        explanation: 'JSON é um formato comum para trocar dados entre apps e APIs.'
      }
    ]
  },
  {
    id: 'aws',
    title: 'AWS Básico',
    description: 'Conheça serviços essenciais de cloud, storage e serverless.',
    difficulty: 'Cloud',
    color: 'from-orange-200 to-amber-200',
    lessons: [
      {
        id: 'aws-001',
        title: 'Cloud Computing',
        reward: 10,
        question: 'Qual serviço AWS é usado para armazenar arquivos e imagens como objetos?',
        examples: ['Dica: object storage'],
        starterCode: 'Digite o nome do serviço',
        answer: 'S3',
        hint: 'É o serviço de object storage da AWS.',
        explanation: 'Amazon S3 armazena objetos como imagens, backups, vídeos e arquivos estáticos.'
      },
      {
        id: 'aws-002',
        title: 'Compute',
        reward: 10,
        question: 'Qual serviço AWS permite executar código sem gerenciar servidor?',
        examples: ['Dica: serverless'],
        starterCode: 'Digite o nome do serviço',
        answer: 'Lambda',
        hint: 'É serverless e executa funções.',
        explanation: 'AWS Lambda executa funções sob demanda sem você administrar servidores.'
      },
      {
        id: 'aws-003',
        title: 'Banco relacional',
        reward: 10,
        question: 'Qual serviço AWS é usado para bancos relacionais como PostgreSQL e MySQL?',
        examples: ['Dica: Relational Database Service'],
        starterCode: 'Digite o nome do serviço',
        answer: 'RDS',
        hint: 'A sigla começa com R.',
        explanation: 'Amazon RDS gerencia bancos relacionais na AWS.'
      }
    ]
  }
]

export const tracks = learningTracks.map((track) => ({
  ...track,
  totalChallenges: track.lessons.length,
  challenges: track.lessons
}))

export const challenges = tracks.flatMap((track) =>
  track.lessons.map((lesson) => ({
    ...lesson,
    trackId: track.id,
    trackTitle: track.title
  }))
)

export function getTrackById(trackId) {
  return tracks.find((track) => track.id === trackId) ?? tracks[0]
}

export function getChallengeById(challengeId) {
  return challenges.find((challenge) => challenge.id === challengeId) ?? challenges[0]
}

export function getChallengesByTrack(trackId) {
  return challenges.filter((challenge) => challenge.trackId === trackId)
}
