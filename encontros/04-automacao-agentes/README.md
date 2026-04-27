[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 04: O Futuro: Automação e Agentes Autônomos

## Tecnologias Recomendadas
- **Gemini CLI (Sub-agentes)**
- **Gemini CLI (Agentic Mode)**
- **Scripts Shell / Python**

## Teoria
Agentes são o próximo nível da IA. Diferente de um chat onde você precisa copiar e colar, os **Agentes Autônomos** e **Sub-agentes** podem navegar no seu repositório, rodar testes e tentar corrigir erros até que eles passem. Nesta fase, aprendemos a criar ferramentas próprias de automação que estendem o poder da IA para fluxos de trabalho específicos do seu time.

### O Poder dos Agentes:
1. **Missão e Autonomia:** Delegar uma "missão" (ex: "Corrija todos os bugs de lint neste módulo") e deixar que a IA pesquise, proponha e valide a solução.
2. **Custom Agents:** Como configurar o Gemini CLI para atuar com instruções específicas do seu contexto de negócio.
3. **Automação de Workflows:** Scripts que orquestram múltiplas chamadas de IA para tarefas repetitivas (ex: geração de changelogs ou triagem de issues).

## Exemplos Práticos
### Prompt para Sub-agentes do Gemini CLI
"@generalist Pesquise onde a validação de endereço ocorre no checkout e torne o campo de número opcional, atualizando todos os testes afetados."

### Scripts de Automação
Como integrar o Gemini CLI em scripts Bash para processar arquivos em lote ou realizar auditorias de código automáticas.

## Sugestões de Ferramentas
- **Gemini CLI Sub-agents:** Utilize a sintaxe `@` para chamar agentes específicos (ex: `@codebase_investigator`, `@generalist`).

## Exercícios e Prática
- [💡 Ideias de Projeto](exercicios-e-prompts/ideias_de_projeto.md)
- [💬 Prompts Essenciais](exercicios-e-prompts/prompts_essenciais.md)

## Exercício Prático
1. Utilize a sintaxe `@agent_name` para delegar tarefas complexas aos sub-agentes do Gemini CLI.
2. Dê a ele uma tarefa média: "Crie uma nova página de perfil de usuário com campos para Nome, Bio e Foto de Perfil, integrando com a API existente".
3. Desenvolva um script simples (Python ou Shell) que use o Gemini CLI para gerar um resumo de mudanças (Changelog) baseado no `git diff` da última semana.
