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
        explanation: 'Um algoritmo é uma sequência de passos para resolver um problema.',
        successMessage: 'Você criou seu primeiro algoritmo: uma instrução clara que mostra uma mensagem na tela.'
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
        explanation: 'Condições ajudam o programa a tomar decisões.',
        successMessage: 'Boa! Você usou uma condição para transformar uma regra em decisão de programa.'
      },
      {
        id: 'logic-003',
        title: 'Repetição',
        reward: 10,
        question: 'Escreva uma instrução para repetir uma ação 3 vezes.',
        examples: ['repita 5 vezes'],
        starterCode: 'repita ...',
        answer: 'repita 3 vezes',
        hint: 'Use a palavra repita, o número 3 e a palavra vezes.',
        explanation: 'Repetições evitam escrever a mesma ação várias vezes.',
        successMessage: 'Mandou bem: você descreveu um loop, uma das ideias mais importantes da lógica.'
      },
      {
        id: 'logic-004',
        title: 'Entrada de dados',
        reward: 10,
        question: 'Escreva uma instrução para ler o valor chamado nome.',
        examples: ['leia idade'],
        starterCode: 'leia ...',
        answer: 'leia nome',
        hint: 'Use leia seguido do nome do dado.',
        explanation: 'Entrada de dados permite que o programa receba informações do usuário.',
        successMessage: 'Perfeito: seu algoritmo agora sabe receber um dado antes de trabalhar com ele.'
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
        explanation: 'Variáveis guardam valores. Em JavaScript, let declara uma variável que pode mudar depois.',
        successMessage: 'Você declarou uma variável em JavaScript e guardou um texto nela. Esse é o começo de quase todo programa.'
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
        explanation: 'Funções recebem parâmetros e podem retornar um resultado usando return.',
        successMessage: 'Ótimo: sua função recebe dois valores e devolve um resultado reutilizável.'
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
        explanation: 'Condições permitem executar código apenas quando uma regra é verdadeira.',
        successMessage: 'Você criou uma regra com if. Agora seu código consegue decidir com base em uma condição.'
      },
      {
        id: 'js-004',
        title: 'Array inicial',
        reward: 10,
        question: 'Crie uma constante chamada numeros com os valores 1, 2 e 3.',
        examples: ['const frutas = ["maçã", "banana"]'],
        starterCode: '// escreva o array aqui',
        answer: 'const numeros = [1, 2, 3]',
        hint: 'Use const, o nome numeros e colchetes para a lista.',
        explanation: 'Arrays guardam listas de valores em uma única variável.',
        successMessage: 'Legal: você agrupou vários números em um array, uma estrutura essencial em JavaScript.'
      },
      {
        id: 'js-005',
        title: 'Template string',
        reward: 10,
        question: 'Retorne a frase `Olá, ${nome}` usando template string.',
        examples: ['`Curso: ${curso}`'],
        starterCode: 'function saudar(nome) {\n  // retorne a saudação\n}',
        answer: 'return `Olá, ${nome}`',
        hint: 'Use crases e ${nome} dentro do texto.',
        explanation: 'Template strings facilitam montar textos com valores dinâmicos.',
        successMessage: 'Boa! Você montou uma frase dinâmica com template string, bem comum em interfaces web.'
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
        explanation: 'Python usa uma sintaxe simples: nome_da_variavel = valor.',
        successMessage: 'Você criou uma variável em Python usando uma sintaxe direta e legível.'
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
        explanation: 'Funções em Python usam def e indentação para definir o bloco.',
        successMessage: 'Excelente: você completou o retorno de uma função Python com parâmetros.'
      },
      {
        id: 'py-003',
        title: 'Lista em Python',
        reward: 10,
        question: 'Crie uma lista chamada linguagens com "Python" e "JavaScript".',
        examples: ['frutas = ["maçã", "uva"]'],
        starterCode: '# crie a lista aqui',
        answer: 'linguagens = ["Python", "JavaScript"]',
        hint: 'Use colchetes e separe os textos por vírgula.',
        explanation: 'Listas em Python guardam coleções ordenadas de valores.',
        successMessage: 'Boa: você criou uma lista, uma estrutura muito usada para trabalhar com coleções.'
      },
      {
        id: 'py-004',
        title: 'Condição em Python',
        reward: 10,
        question: 'Retorne "aprovado" se nota for maior ou igual a 7.',
        examples: ['if idade >= 18:\n    return "maior"'],
        starterCode: 'def resultado(nota):\n    # complete aqui',
        answer: 'if nota >= 7: return "aprovado"',
        hint: 'Use if nota >= 7 e retorne o texto aprovado.',
        explanation: 'O if em Python executa uma ação quando a condição é verdadeira.',
        successMessage: 'Você escreveu uma condição em Python para classificar um resultado.'
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
        question: 'Busque todos os campos da tabela usuarios.',
        examples: ['SELECT * FROM produtos;'],
        starterCode: '-- escreva sua query aqui',
        answer: 'SELECT * FROM usuarios;',
        hint: 'Use SELECT * FROM nome_da_tabela;',
        explanation: 'SELECT busca dados. O * indica todas as colunas da tabela.',
        successMessage: 'Você fez sua primeira consulta SQL e buscou todos os campos de uma tabela.'
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
        explanation: 'WHERE limita os resultados usando uma regra.',
        successMessage: 'Filtro aplicado: você usou WHERE para trazer só os registros que interessam.'
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
        explanation: 'JOIN conecta dados de tabelas relacionadas.',
        successMessage: 'Você conectou duas tabelas com JOIN, uma habilidade essencial para consultas reais.'
      },
      {
        id: 'sql-004',
        title: 'Ordenação',
        reward: 10,
        question: 'Ordene os usuários pelo nome em ordem crescente.',
        examples: ['ORDER BY preco ASC;'],
        starterCode: 'SELECT * FROM usuarios\n-- ordene aqui',
        answer: 'ORDER BY nome ASC;',
        hint: 'Use ORDER BY, o campo nome e ASC.',
        explanation: 'ORDER BY organiza o resultado de uma consulta.',
        successMessage: 'Muito bom: você ordenou os resultados para deixar a consulta mais fácil de ler.'
      },
      {
        id: 'sql-005',
        title: 'Contagem',
        reward: 10,
        question: 'Conte quantos registros existem na tabela usuarios.',
        examples: ['SELECT COUNT(*) FROM produtos;'],
        starterCode: '-- conte os usuários',
        answer: 'SELECT COUNT(*) FROM usuarios;',
        hint: 'Use SELECT COUNT(*) FROM usuarios;',
        explanation: 'COUNT conta registros retornados por uma consulta.',
        successMessage: 'Você usou COUNT para transformar linhas de uma tabela em uma métrica.'
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
        question: 'Qual comando cria um commit com a mensagem "inicio"?',
        examples: ['git commit -m "mensagem"'],
        starterCode: 'git ...',
        answer: 'git commit -m "inicio"',
        hint: 'Use git commit -m.',
        explanation: 'Commits salvam um ponto no histórico do projeto.',
        successMessage: 'Commit criado: você salvou um ponto claro no histórico do projeto.'
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
        explanation: 'O push envia commits locais para um repositório remoto.',
        successMessage: 'Você enviou o trabalho local para o remoto. É assim que projetos chegam ao GitHub.'
      },
      {
        id: 'git-003',
        title: 'Ver status',
        reward: 10,
        question: 'Qual comando mostra arquivos modificados e prontos para commit?',
        examples: ['git status'],
        starterCode: 'git ...',
        answer: 'git status',
        hint: 'É o comando mais usado para conferir o estado do repositório.',
        explanation: 'git status mostra mudanças, arquivos staged e a branch atual.',
        successMessage: 'Boa: você sabe checar o estado do repositório antes de commitar.'
      },
      {
        id: 'git-004',
        title: 'Preparar arquivo',
        reward: 10,
        question: 'Qual comando adiciona o arquivo README.md à área de stage?',
        examples: ['git add index.html'],
        starterCode: 'git ...',
        answer: 'git add README.md',
        hint: 'Use git add seguido do nome do arquivo.',
        explanation: 'git add prepara mudanças para o próximo commit.',
        successMessage: 'Você preparou um arquivo específico para commit usando a área de stage.'
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
        explanation: 'GET é usado para solicitar dados de um recurso.',
        successMessage: 'Você identificou o método certo para leitura de dados em APIs.'
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
        explanation: 'JSON é um formato comum para trocar dados entre apps e APIs.',
        successMessage: 'JSON pronto: você montou um par chave-valor no formato que APIs usam o tempo todo.'
      },
      {
        id: 'apis-003',
        title: 'Criar recurso',
        reward: 10,
        question: 'Qual método HTTP geralmente é usado para criar um novo recurso?',
        examples: ['POST /usuarios'],
        starterCode: 'Digite o método',
        answer: 'POST',
        hint: 'É o método comum para envio/criação.',
        explanation: 'POST envia dados para criar ou processar recursos.',
        successMessage: 'Você escolheu POST, o método mais comum para criar recursos em uma API.'
      },
      {
        id: 'apis-004',
        title: 'Status de sucesso',
        reward: 10,
        question: 'Qual status HTTP indica que uma requisição foi bem-sucedida?',
        examples: ['404 indica não encontrado'],
        starterCode: 'Digite o status',
        answer: '200',
        hint: 'É o status clássico de OK.',
        explanation: 'O status 200 indica que a requisição foi processada com sucesso.',
        successMessage: 'Você reconheceu o status 200, o sinal clássico de sucesso em uma resposta HTTP.'
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
        explanation: 'Amazon S3 armazena objetos como imagens, backups, vídeos e arquivos estáticos.',
        successMessage: 'Você identificou o S3, o serviço base para armazenar objetos e arquivos na AWS.'
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
        explanation: 'AWS Lambda executa funções sob demanda sem você administrar servidores.',
        successMessage: 'Você acertou Lambda: código sob demanda sem precisar cuidar de servidor.'
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
        explanation: 'Amazon RDS gerencia bancos relacionais na AWS.',
        successMessage: 'Você reconheceu o RDS, serviço gerenciado para bancos relacionais na AWS.'
      },
      {
        id: 'aws-004',
        title: 'Máquina virtual',
        reward: 10,
        question: 'Qual serviço AWS cria servidores virtuais chamados instâncias?',
        examples: ['Dica: Elastic Compute Cloud'],
        starterCode: 'Digite o nome do serviço',
        answer: 'EC2',
        hint: 'É o serviço de máquinas virtuais da AWS.',
        explanation: 'Amazon EC2 permite criar e controlar servidores virtuais na nuvem.',
        successMessage: 'Você identificou o EC2, a base para criar servidores virtuais na AWS.'
      },
      {
        id: 'aws-005',
        title: 'Permissões',
        reward: 10,
        question: 'Qual serviço AWS controla usuários, grupos, roles e permissões?',
        examples: ['Dica: Identity and Access Management'],
        starterCode: 'Digite o nome do serviço',
        answer: 'IAM',
        hint: 'É o serviço de identidade e acesso.',
        explanation: 'IAM controla permissões e identidades dentro da AWS.',
        successMessage: 'Você acertou IAM: segurança e permissões são parte central de qualquer ambiente cloud.'
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
