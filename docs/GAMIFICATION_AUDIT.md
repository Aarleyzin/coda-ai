# Auditoria de gamificação e escala

## Diagnóstico da experiência

A base atual é clara, mobile-first e já tem XP, nível, trilhas, sequência, conquistas e feedback individual. A próxima fase deve aumentar a sensação de resposta imediata e criar hábito sem punir quem está começando.

### 1. Caminho visual e progresso vivo

Trocar a lista linear por um mapa vertical de lições com nós bloqueados, atuais, concluídos e de revisão. O avanço deve animar a barra, o nó e a passagem para o próximo microdesafio.

- Usar framer-motion, que já está instalado, para springs, gestos e AnimatePresence.
- Animar somente transform e opacity e respeitar prefers-reduced-motion.
- Mostrar progresso da unidade e da habilidade, não apenas da trilha inteira.

### 2. Celebração curta e contextual

Ao acertar, combinar uma animação de 600 a 900 ms, reforço textual ligado ao conceito, XP entrando no contador e confete apenas em marcos importantes.

- Usar canvas-confetti apenas quando houver conclusão de unidade, nível ou conquista.
- Em acertos comuns, usar Motion e o mascote para evitar fadiga visual.
- Nunca bloquear o botão de continuar por causa da animação.

### 3. Feedback tátil, sonoro e instantâneo

Dar retorno no próprio controle: seleção, erro, acerto e perda de coração. Em dispositivos compatíveis, usar navigator.vibrate() como melhoria progressiva e áudio curto pré-carregado, sempre com opção de silenciar.

- Acerto: pulso curto e cor positiva.
- Erro: deslocamento lateral leve, explicação específica e preservação da resposta.
- Dica: destacar somente a parte necessária, sem revelar tudo.

## Vidas, ofensiva e estado global

Adicionar uma fatia engagement ao Zustand:

    engagement: {
      hearts: 5,
      maxHearts: 5,
      lastHeartRefillAt: null,
      streak: {
        current: 0,
        longest: 0,
        lastPracticeDate: null,
        freezeCount: 0
      },
      dailyGoal: {
        date: null,
        targetXp: 20,
        earnedXp: 0
      }
    }

Ações recomendadas: loseHeart, refillHearts, registerPracticeDay, consumeStreakFreeze, addDailyXp e rolloverDailyState. Um erro validado perde um coração; dicas e erros de interface não. Ao chegar a zero, oferecer revisão sem custo e aguardar recarga, evitando paywall punitivo para iniciantes.

Persistir apenas engagement, XP e progresso. Estado efêmero da sessão, como animação, resposta selecionada e modal aberto, deve ficar local à tela. Usar seletores Zustand por campo para reduzir renderizações. A migração deve subir a versão do store e preencher apenas campos ausentes, preservando codaai-progress-v2.

A ofensiva deve usar a data local normalizada (YYYY-MM-DD) e ser atualizada ao atingir a meta diária, não ao abrir o app. Se houver um dia perdido, consumir uma proteção antes de zerar. Registrar também longest para conquistas.

## Curva em micro-passos

Cada desafio deve ensinar ou recuperar um único conceito e durar de 20 a 60 segundos. A sequência pedagógica recomendada é:

1. Reconhecer a sintaxe.
2. Escolher entre alternativas.
3. Completar uma lacuna.
4. Ordenar blocos.
5. Produzir uma linha curta sem apoio.
6. Aplicar o conceito em contexto novo.
7. Revisar de forma espaçada.

Campos como skill, prerequisiteIds, step, fadedSupport, estimatedSeconds e version permitem medir domínio, reduzir ajuda gradualmente e alterar conteúdo sem quebrar ids concluídos.

### JavaScript: de 5 para 20

| Unidade | Microdesafios |
| --- | --- |
| Valores e variáveis | reconhecer string; escolher let; completar atribuição; corrigir nome; criar variável sem apoio |
| Operadores e funções | reconhecer +; prever soma; completar return; ordenar função; criar função curta |
| Condições | identificar booleano; escolher comparação; completar if; corrigir condição; classificar valor |
| Arrays e integração | reconhecer array; acessar índice; adicionar item; combinar array e condição; desafio final guiado |

A cada quatro itens novos, inserir uma revisão de conceito anterior. Liberar produção livre só depois de duas interações guiadas. Em caso de dois erros seguidos, aumentar suporte temporariamente; após dois acertos, reduzir exemplos.

## Pipeline de conteúdo

1. Autor cria ou atualiza conteúdo usando src/data/challenge.schema.json.
2. Validação automática rejeita ids duplicados, pré-requisitos inexistentes e tipos sem configuração obrigatória.
3. Revisão pedagógica verifica um conceito por desafio, linguagem A1 e feedback acionável.
4. Testes executam respostas aceitas e respostas incorretas conhecidas.
5. Publicação mensal incrementa metadata.version, sem reutilizar ids antigos.
6. Métricas acompanham início, acerto, dica, abandono e conclusão por desafio.

O primeiro passo técnico seguinte é extrair learningTracks para arquivos por trilha e criar um registro central. Depois, um renderer por tipo (CodeInput, FillBlank, MultipleChoice, CodeBlocks) pode compartilhar validação, feedback e analytics.

## Ordem de implementação

1. Instrumentar eventos e funil por desafio.
2. Implementar mapa visual e feedback animado.
3. Adicionar Vidas e meta diária com migração do store.
4. Implementar fill_in_the_blank dedicado.
5. Implementar blocos com drag and drop acessível.
6. Expandir JavaScript para 20 microdesafios e revisar retenção.
7. Automatizar validação de conteúdo no CI.
