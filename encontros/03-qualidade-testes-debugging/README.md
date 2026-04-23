[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 04: Testes Automatizados e Edge Cases

## Tecnologias Recomendadas
- **Vitest / Jest**
- **Playwright / Cypress**
- **CodiumAI / Squaretest**

## Teoria
A IA é uma aliada formidável no **Test-Driven Development (TDD)**. Ela não deve apenas gerar testes "felizes", mas sim ajudar a identificar **edge cases** (casos extremos) que o desenvolvedor humano poderia esquecer.

### Aplicações:
- **Geração de Mocks:** Criar dados complexos para testes.
- **Cobertura de Código:** Analisar um arquivo e gerar testes para caminhos não cobertos.
- **E2E Testing:** Gerar seletores e fluxos de interação para o navegador.

## Exemplos Práticos
### Prompt para Cobertura de Testes
"Analise a função `@calculateTax.ts` e gere 5 testes unitários usando Vitest. Inclua cenários com valores negativos, zero e valores extremamente altos para garantir a robustez."

## Sugestões de Ferramentas
- **Coverage Reports (v8):** Use para mostrar à IA quais linhas ainda não têm testes.

## Exercício Prático
1. Escolha uma lógica de negócio sem testes no seu repositório.
2. Peça ao Gemini CLI: "Escreva uma suíte de testes unitários para este arquivo, garantindo que o mock do banco de dados seja isolado".
3. Tente fazer a IA "quebrar" seu código sugerindo inputs inesperados.
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
