[<- Voltar ao Índice](../CURSO_ENGENHEIRO_IA.md)

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
