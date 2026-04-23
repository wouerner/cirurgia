[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 02: Prompt Engineering e Pair Programming Agentic

## Tecnologias Recomendadas
- **Gemini CLI**
- **Sub-agentes:** `codebase_investigator`, `generalist`.
- **Prompts estruturados em Markdown**

## Teoria
**Contexto é Rei.** Diferente de IAs baseadas em chat no navegador ou extensões de IDE simples, o Gemini CLI opera como um **Agente Orquestrador**. Ele não apenas "vê" o código através de embeddings, mas tem a capacidade de ativamente explorar seu projeto usando ferramentas de terminal para entender dependências, símbolos e arquitetura em tempo real.

### Técnicas de Prompting Avançadas:
- **System Prompting:** Como configurar comportamentos globais para a IA.
- **Chain-of-Thought (CoT):** Pedir para a IA "pensar passo a passo" antes de propor uma solução.
- **Few-Shot Prompting:** Fornecer exemplos concretos de padrões de código (Design Patterns) para a IA seguir.

### Recursos Chave (Agentic Workflow):
- **Tool-Based Research:** O Gemini CLI usa ferramentas como `grep_search`, `glob` e `read_file` para construir seu próprio contexto sob demanda.
- **Plan Mode:** Use o modo de planejamento para mudanças complexas antes de tocar no código.

## Exemplos Práticos
### Prompt de Análise Agentic
"Analise o fluxo de autenticação atual e me explique quais são os arquivos críticos envolvidos antes de propormos uma mudança para JWT."

### Prompt Estruturado (System Prompt)
"Você é um especialista em TypeScript e Design Patterns. Ao gerar código, priorize a imutabilidade e use o padrão 'Factory' para criação de objetos. Se houver múltiplas formas de resolver, apresente os trade-offs de performance."

## Sugestões de Ferramentas
- **.geminiignore:** Configure arquivos e pastas que a IA deve ignorar para economizar tokens e garantir segurança.
- **Custom Sub-agents:** Crie seus próprios agentes com instruções específicas para o seu projeto.

## Exercício Prático
1. Abra um projeto existente no terminal.
2. Peça ao Gemini CLI: "Analise este repositório e crie um relatório técnico sobre as tecnologias utilizadas e a arquitetura geral do projeto."
3. Solicite uma alteração que afete múltiplos arquivos (ex: "Renomeie a entidade User para Client em todo o projeto, incluindo tabelas de banco e rotas de API") e observe como ele planeja e executa a tarefa autonomamente.
