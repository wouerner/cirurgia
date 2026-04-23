[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 02: Gemini CLI Mastery e Pair Programming Agentic

## Tecnologias Recomendadas
- **Gemini CLI**
- **Sub-agentes:** `codebase_investigator`, `generalist`.
- **Google AI Studio (API Key)**

## Teoria
**Contexto é Rei.** Diferente de IAs baseadas em chat no navegador ou extensões de IDE simples, o Gemini CLI opera como um **Agente Orquestrador**. Ele não apenas "vê" o código através de embeddings, mas tem a capacidade de ativamente explorar seu projeto usando ferramentas de terminal para entender dependências, símbolos e arquitetura em tempo real.

### Recursos Chave (Agentic Workflow):
- **Tool-Based Research:** O Gemini CLI usa ferramentas como `grep_search`, `glob` e `read_file` para construir seu próprio contexto sob demanda.
- **Sub-agentes Especializados:** Delegue tarefas massivas (como refatorar 20 arquivos) para o agente `generalist` ou análises profundas para o `codebase_investigator`.
- **Plan Mode:** Use o modo de planejamento para mudanças complexas antes de tocar no código.

## Exemplos Práticos
### Uso de Comandos Agentic
"Analise o fluxo de autenticação atual e me explique quais são os arquivos críticos envolvidos antes de propormos uma mudança para JWT."

## Sugestões de Ferramentas
- **.geminiignore:** Configure arquivos e pastas que a IA deve ignorar para economizar tokens e garantir segurança.
- **Custom Sub-agents:** Crie seus próprios agentes com instruções específicas para o seu projeto.

## Exercício Prático
1. Abra um projeto existente no terminal.
2. Peça ao Gemini CLI: "Analise este repositório e crie um relatório técnico sobre as tecnologias utilizadas e a arquitetura geral do projeto."
3. Solicite uma alteração que afete múltiplos arquivos (ex: "Renomeie a entidade User para Client em todo o projeto, incluindo tabelas de banco e rotas de API") e observe como ele planeja e executa a tarefa autonomamente.
[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 03: Prompt Engineering para Desenvolvedores

## Tecnologias Recomendadas
- **Gemini CLI (Sub-agentes e Contexto)**
- **Gemini CLI (System Prompts e Custom Sub-agents)**
- **Prompts estruturados em Markdown**

## Teoria
Prompting para código não é apenas pedir "faça um login". Envolve técnicas como **Chain-of-Thought** (pedir para a IA pensar passo a passo) e **Role Prompting**. Para resultados de nível sênior, o prompt deve ser estruturado.

### Técnicas de Ouro:
- **Few-Shot Prompting:** Dê 1 ou 2 exemplos de como você quer o código antes de pedir a tarefa real.
- **Pseudocódigo Guiado:** Escreva os comentários da lógica e peça para a IA preencher o código.

## Exemplos Práticos
### Prompt Estruturado (System Prompt)
"Você é um especialista em TypeScript e Design Patterns. Ao gerar código, priorize a imutabilidade e use o padrão 'Factory' para criação de objetos. Se houver múltiplas formas de resolver, apresente os trade-offs de performance."

## Sugestões de Ferramentas
- **PromptPerfect:** Para otimização de prompts complexos.
- **GitHub Gists:** Para salvar seus "Power Prompts" de desenvolvimento.

## Exercício Prático
1. Escolha um Design Pattern complexo (ex: Strategy ou Observer).
2. Escreva um prompt que peça a implementação desse pattern em um cenário real (ex: sistema de notificações), mas force a IA a explicar a lógica *antes* de cuspir o código.
3. Refine o resultado pedindo para adicionar tipagem estrita e tratamento de erros.
