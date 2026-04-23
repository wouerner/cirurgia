[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 03: Ciclo de Qualidade: Testes e Debugging com IA

## Tecnologias Recomendadas
- **Vitest / Jest / Playwright**
- **Sentry / Logs de Aplicação**
- **Gemini CLI (Agentic Debugging)**

## Teoria
A IA é uma aliada formidável no **Test-Driven Development (TDD)** e na **Análise de Causa Raiz (RCA)**. Ela não deve apenas gerar testes simples, mas sim ajudar a identificar **edge cases** e desvendar bugs "impossíveis" analisando logs e stack traces gigantes que seriam exaustivos para um humano.

### Testes com IA:
- **Geração de Mocks:** Criar dados complexos para testes isolados.
- **Cobertura Inteligente:** Analisar arquivos e gerar testes para caminhos não cobertos logicamente.
- **E2E Testing:** Gerar seletores e fluxos de interação para Playwright/Cypress.

### Debugging e RCA:
- **Agente Detetive:** O Gemini CLI pode atuar explorando seu projeto para encontrar a origem de um erro que parece não fazer sentido estruturalmente.
- **Análise de Logs:** Processamento de logs massivos para identificar padrões de falha.

## Exemplos Práticos
### Prompt para Cobertura de Testes
"Analise a função `calculateTax.ts` e gere 5 testes unitários usando Vitest. Inclua cenários com valores negativos, zero e valores extremamente altos."

### Prompt de Debugging e RCA
"Abaixo estão os logs do meu serviço de checkout. Analise o erro 500 recorrente e pesquise no código onde essa falha pode estar sendo originada."

## Sugestões de Ferramentas
- **Coverage Reports:** Use para mostrar à IA quais linhas ainda não têm testes.
- **Terminal Moderno:** Para facilitar a visualização de traces e logs extensos.

## Exercício Prático
1. Escolha uma lógica de negócio sem testes ou um bug conhecido.
2. Peça ao Gemini CLI: "Escreva uma suíte de testes unitários para este arquivo, garantindo que o mock do banco de dados seja isolado".
3. Force um erro intencional e use o comando `gemini` para analisar: "Analise este erro e sugira uma correção estrutural e não apenas um 'if' de proteção."
