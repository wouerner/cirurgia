[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 01: O Engenheiro de Software e o Arsenal CLI

## Tecnologias Recomendadas
- **Gemini CLI** (Ferramenta Principal)
- **Google AI Studio (API Key)**
- **Node.js & NPM** (Ambiente de execução)

## Teoria
O papel do desenvolvedor está mudando drasticamente. Deixamos de ser meros "digitadores de código" para nos tornarmos **arquitetos, revisores e orquestradores**. Com o uso de agentes via CLI, o desenvolvedor passa a atuar no nível da intenção, guiando a IA através do terminal para realizar mudanças estruturais e complexas em todo o projeto, e não apenas em arquivos isolados.

### Contexto e Agentic Workflow:
- **Indexação Inteligente:** O Gemini CLI não apenas lê arquivos, ele compreende o projeto como um todo.
- **Workflow CLI-First:** Como o terminal se torna a interface principal para criação e modificação de sistemas.

### Ética e Segurança
- **Dados Sensíveis:** Jamais cole segredos de API, senhas ou dados de clientes no prompt. O Gemini CLI respeita arquivos `.gitignore`, mas a atenção deve ser redobrada.
- **Propriedade Intelectual:** Verifique as políticas da sua empresa sobre o uso de ferramentas de IA no código proprietário.

## Exemplos Práticos
### Prompt de Alinhamento de Contexto via CLI
"Atue como um Engenheiro de Software Sênior especializado em Node.js e Clean Architecture. Analise meu projeto atual e proponha a estrutura de pastas e as interfaces antes de escrever a lógica."

## Sugestões de Ferramentas
- **Terminal Moderno:** Warp, iTerm2 ou Windows Terminal.
- **Aliases de Terminal:** Crie atalhos para comandos frequentes do Gemini CLI para ganhar agilidade.

## Exercícios e Prática
- [💡 Ideias de Projeto](exercicios-e-prompts/ideias_de_projeto.md)
- [💬 Prompts Essenciais](exercicios-e-prompts/prompts_essenciais.md)

## Exercício Prático
1. Realize a instalação do **Gemini CLI** em sua máquina.
2. Configure sua `GOOGLE_API_KEY` no ambiente.
3. No terminal, dentro de uma pasta vazia, execute o Gemini e peça: "Crie um arquivo index.js com uma função de validação de CPF profissional e seus respectivos testes unitários", observando como a ferramenta cria os arquivos e estrutura o código autonomamente.
