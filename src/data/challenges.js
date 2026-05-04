export const learningTracks = [
  {
    id: 'logic',
    title: 'Logica de programacao',
    description: 'Aprenda variaveis, condicoes, repeticoes e pensamento computacional.',
    difficulty: 'Iniciante',
    icon: 'Brain',
    color: 'from-rose-200 to-orange-200',
    lessons: [
      {
        id: 'logic-001',
        title: 'Primeiro algoritmo',
        reward: 10,
        question: 'Escreva os passos para mostrar a mensagem "Ola, mundo!" na tela.',
        examples: ['Entrada: nenhuma', 'Saida esperada: Ola, mundo!'],
        starterCode: 'mostrar("Ola, mundo!")',
        answer: 'mostrar("Ola, mundo!")',
        hint: 'Use a acao mostrar com o texto entre aspas.',
        explanation: 'Um algoritmo e uma sequencia de passos para resolver um problema.'
      },
      {
        id: 'logic-002',
        title: 'Condicao simples',
        reward: 10,
        question: 'Complete a regra: se pontos for maior ou igual a 100, retorne "subiu de nivel".',
        examples: ['pontos = 120 retorna "subiu de nivel"'],
        starterCode: 'se pontos >= 100 entao',
        answer: 'retorne "subiu de nivel"',
        hint: 'A resposta precisa retornar o texto pedido.',
        explanation: 'Condicoes ajudam o programa a tomar decisoes.'
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Crie suas primeiras variaveis, funcoes e regras na linguagem da web.',
    difficulty: 'Iniciante',
    icon: 'JS',
    color: 'from-yellow-200 to-amber-200',
    lessons: [
      {
        id: 'js-001',
        title: 'Variaveis e tipos',
        reward: 10,
        question: 'Crie uma variavel chamada nome com o valor "Aarley".',
        examples: ['let curso = "JavaScript"'],
        starterCode: '// escreva sua resposta aqui',
        answer: 'let nome = "Aarley"',
        hint: 'Use let, o nome da variavel e uma string entre aspas.',
        explanation: 'Variaveis guardam valores. Em JavaScript, let declara uma variavel que pode mudar depois.'
      },
      {
        id: 'js-002',
        title: 'Funcao soma',
        reward: 10,
        question: 'Complete a funcao para retornar a soma de dois numeros.',
        examples: ['somar(2, 3) retorna 5'],
        starterCode: 'function somar(a, b) {\n  // escreva seu codigo aqui\n}',
        answer: 'return a + b',
        hint: 'Use return com o operador +.',
        explanation: 'Funcoes recebem parametros e podem retornar um resultado usando return.'
      },
      {
        id: 'js-003',
        title: 'Condicao if/else',
        reward: 10,
        question: 'Retorne "maior" se idade for maior ou igual a 18.',
        examples: ['idade = 19 retorna "maior"'],
        starterCode: 'function verificarIdade(idade) {\n  // escreva seu codigo aqui\n}',
        answer: 'if (idade >= 18) return "maior"',
        hint: 'Use if com >= 18.',
        explanation: 'Condicoes permitem executar codigo apenas quando uma regra e verdadeira.'
      }
    ]
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Pratique uma sintaxe amigavel para automacao, dados e backend.',
    difficulty: 'Iniciante',
    icon: 'PY',
    color: 'from-sky-200 to-cyan-200',
    lessons: [
      {
        id: 'py-001',
        title: 'Variaveis em Python',
        reward: 10,
        question: 'Crie uma variavel chamada linguagem com o valor "Python".',
        examples: ['nome = "Ada"'],
        starterCode: '# escreva sua resposta aqui',
        answer: 'linguagem = "Python"',
        hint: 'Em Python nao precisa usar let ou const.',
        explanation: 'Python usa uma sintaxe simples: nome_da_variavel = valor.'
      },
      {
        id: 'py-002',
        title: 'Funcao em Python',
        reward: 10,
        question: 'Crie uma funcao chamada somar que retorna a + b.',
        examples: ['def dobro(n):\n    return n * 2'],
        starterCode: 'def somar(a, b):\n    # escreva seu codigo aqui',
        answer: 'return a + b',
        hint: 'Dentro da funcao, use return.',
        explanation: 'Funcoes em Python usam def e indentacao para definir o bloco.'
      }
    ]
  },
  {
    id: 'sql',
    title: 'SQL',
    description: 'Consulte, filtre e conecte dados em tabelas.',
    difficulty: 'Essencial',
    icon: 'DB',
    color: 'from-emerald-200 to-teal-200',
    lessons: [
      {
        id: 'sql-001',
        title: 'SELECT basico',
        reward: 10,
        question: 'Busque todos os campos da tabela usuarios.',
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
        question: 'Busque usuarios com idade maior que 18.',
        examples: ['WHERE status = "ativo";'],
        starterCode: 'SELECT * FROM usuarios\n-- complete aqui',
        answer: 'WHERE idade > 18;',
        hint: 'WHERE filtra linhas por condicao.',
        explanation: 'WHERE limita os resultados usando uma regra.'
      },
      {
        id: 'sql-003',
        title: 'JOIN',
        reward: 15,
        question: 'Una usuarios e pedidos usando usuarios.id = pedidos.usuario_id.',
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
    description: 'Controle versoes, salve commits e publique projetos.',
    difficulty: 'DevTools',
    icon: 'Git',
    color: 'from-slate-200 to-zinc-200',
    lessons: [
      {
        id: 'git-001',
        title: 'Salvar alteracoes',
        reward: 10,
        question: 'Qual comando cria um commit com a mensagem "inicio"?',
        examples: ['git commit -m "mensagem"'],
        starterCode: 'git ...',
        answer: 'git commit -m "inicio"',
        hint: 'Use git commit -m.',
        explanation: 'Commits salvam um ponto no historico do projeto.'
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
        explanation: 'O push envia commits locais para um repositorio remoto.'
      }
    ]
  },
  {
    id: 'apis',
    title: 'APIs',
    description: 'Entenda metodos HTTP, endpoints e respostas JSON.',
    difficulty: 'Backend',
    icon: 'API',
    color: 'from-violet-200 to-indigo-200',
    lessons: [
      {
        id: 'apis-001',
        title: 'Metodo HTTP',
        reward: 10,
        question: 'Qual metodo HTTP geralmente e usado para buscar dados?',
        examples: ['GET /usuarios'],
        starterCode: 'Digite o metodo',
        answer: 'GET',
        hint: 'E o metodo de leitura.',
        explanation: 'GET e usado para solicitar dados de um recurso.'
      },
      {
        id: 'apis-002',
        title: 'JSON',
        reward: 10,
        question: 'Complete um objeto JSON com a chave nome e o valor "codaaí".',
        examples: ['{ "ativo": true }'],
        starterCode: '{\n  \n}',
        answer: '"nome": "codaaí"',
        hint: 'JSON usa chave e valor entre aspas.',
        explanation: 'JSON e um formato comum para trocar dados entre apps e APIs.'
      }
    ]
  },
  {
    id: 'aws',
    title: 'AWS Basico',
    description: 'Conheca servicos essenciais de cloud, storage e serverless.',
    difficulty: 'Cloud',
    icon: 'AWS',
    color: 'from-orange-200 to-amber-200',
    lessons: [
      {
        id: 'aws-001',
        title: 'Cloud Computing',
        reward: 10,
        question: 'Qual servico AWS e usado para armazenar arquivos e imagens como objetos?',
        examples: ['Dica: object storage'],
        starterCode: 'Digite o nome do servico',
        answer: 'S3',
        hint: 'E o servico de object storage da AWS.',
        explanation: 'Amazon S3 armazena objetos como imagens, backups, videos e arquivos estaticos.'
      },
      {
        id: 'aws-002',
        title: 'Compute',
        reward: 10,
        question: 'Qual servico AWS permite executar codigo sem gerenciar servidor?',
        examples: ['Dica: serverless'],
        starterCode: 'Digite o nome do servico',
        answer: 'Lambda',
        hint: 'E serverless e executa funcoes.',
        explanation: 'AWS Lambda executa funcoes sob demanda sem voce administrar servidores.'
      },
      {
        id: 'aws-003',
        title: 'Banco relacional',
        reward: 10,
        question: 'Qual servico AWS e usado para bancos relacionais como PostgreSQL e MySQL?',
        examples: ['Dica: Relational Database Service'],
        starterCode: 'Digite o nome do servico',
        answer: 'RDS',
        hint: 'A sigla comeca com R.',
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
