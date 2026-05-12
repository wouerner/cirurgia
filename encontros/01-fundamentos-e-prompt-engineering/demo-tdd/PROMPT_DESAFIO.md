# Desafio: TDD Assistido 🧪

Neste desafio, você verá como o **Gemini CLI** pode acelerar o ciclo de desenvolvimento orientado a testes.

## O Cenário
Temos um arquivo `discount_service.js` que precisa implementar uma lógica de desconto progressivo, mas ainda está vazio.

## O Desafio
Peça para a IA gerar primeiro os testes e depois a implementação. Copie e cole:

```bash
gemini "Estou usando Node.js e Jest. No arquivo encontros/01-fundamentos-e-prompt-engineering/demo-tdd/discount_service.js, preciso implementar uma função calculateDiscount que:
1. Retorna 5% de desconto para valores > 100.
2. Retorna 10% para valores > 500.
3. Retorna 15% para valores > 1000.

Primeiro, gere um arquivo de testes unitários completo para todos esses casos e casos de borda (ex: valor zero ou negativo). 
Depois, implemente o código que satisfaça os testes."
```

## Por que usar Gemini para TDD?
1.  **Casos de Borda:** A IA é excelente em lembrar de testes que nós esquecemos (valores negativos, nulos, tipos errados).
2.  **Velocidade:** Escrever testes costuma ser a parte mais lenta do dev; a IA inverte isso.
