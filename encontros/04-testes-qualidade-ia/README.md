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
