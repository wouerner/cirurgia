[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 05: Debugging e Root Cause Analysis (RCA)

## Tecnologias Recomendadas
- **Sentry / LogRocket**
- **Docker Logs**
- **Gemini CLI (Agentic Debugging)**
- **Terminal Moderno**

## Teoria
Depurar não é apenas ler a mensagem de erro, mas entender a **causa raiz**. O Gemini CLI pode atuar como um "detetive", explorando seu projeto para encontrar a origem de um erro que parece não fazer sentido.

### Workflow de RCA:
1. Use o comando `gemini` passando o erro: "Analise este erro e identifique a causa raiz no projeto".
2. O Gemini irá pesquisar nos arquivos relevantes para entender as dependências que causaram a falha.

## Exemplos Práticos
### Prompt de Análise de Logs
"Abaixo estão os logs de 5 minutos do meu serviço. Identifique se existe um padrão de falha nas requisições que retornam status 500."

## Sugestões de Ferramentas
- **Kibana/Splunk AI Integration:** Para análise de dados de observabilidade.

## Exercício Prático
1. Force um erro intencional no seu código (ex: uma variável nula em um objeto aninhado).
2. Use o Gemini CLI para analisar o erro: "Analise este erro e sugira uma correção estrutural, não apenas um 'if' de proteção."
3. Peça à IA para explicar por que aquele erro aconteceu e como evitar regressões.
