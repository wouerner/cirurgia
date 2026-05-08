[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 01: Fundamentos CLI e Engenharia de Prompt

## Tecnologias Recomendadas
- **Gemini CLI** (Ferramenta Principal)
- **Google AI Studio (API Key)**
- **Sub-agentes:** `codebase_investigator`, `generalist`.

## Teoria
O papel do desenvolvedor está mudando: de "digitador de código" para **arquiteto, revisor e orquestrador**. O Gemini CLI opera como um **Agente Orquestrador** que compreende o projeto como um todo e atua no nível da intenção.

### Contexto e Agentic Workflow:
- **Indexação Inteligente:** O Gemini CLI usa ferramentas como `grep_search`, `glob` e `read_file` para construir seu próprio contexto em tempo real.
- **Workflow CLI-First:** O terminal se torna a interface principal para criação e modificação de sistemas complexos.

### Técnicas de Prompting Avançadas:
- **System Prompting:** Como configurar comportamentos globais para a IA.
- **Chain-of-Thought (CoT):** Pedir para a IA "pensar passo a passo" antes de propor uma solução.
- **Few-Shot Prompting:** Fornecer exemplos concretos de padrões de código (Design Patterns).
- **Sub-agentes e a Sintaxe `@`:** Delegação de tarefas a agentes especializados (`@generalist`, `@codebase_investigator`).

## Exemplos Práticos
### Prompt de Alinhamento de Contexto
"Atue como um Engenheiro de Software Sênior. Analise meu projeto atual e me explique quais são os arquivos críticos envolvidos antes de propormos uma mudança estrutural."

### Prompt Estruturado (System Prompt)
"Você é um especialista em TypeScript e Design Patterns. Ao gerar código, priorize a imutabilidade e use o padrão 'Factory'. Apresente os trade-offs de performance."

## Tutoriais de Apoio
- [🚀 Instalação Sem Root](TUTORIAL_INSTALL_NO_ROOT.md)
- [📚 Materiais de Referência](referencias.md)

## Exercícios e Prática
- [💡 Ideias de Projeto](exercicios-e-prompts/ideias_de_projeto.md)
- [💬 Prompts Essenciais](exercicios-e-prompts/prompts_essenciais.md)

## Exercício Prático
1. Instale o **Gemini CLI** e configure sua `GOOGLE_API_KEY`.
2. Peça ao Gemini: "Analise este repositório e crie um relatório técnico sobre as tecnologias utilizadas e a arquitetura geral."
3. Solicite uma alteração que afete múltiplos arquivos (ex: "Crie uma função de validação de CPF profissional com testes unitários") e observe como ele planeja e executa autonomamente.
