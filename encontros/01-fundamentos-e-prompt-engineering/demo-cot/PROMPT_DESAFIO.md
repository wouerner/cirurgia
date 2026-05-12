# Desafio: Chain-of-Thought na Prática 🧠

Este diretório contém um exemplo real de como utilizar a técnica de **Chain-of-Thought (CoT)** para depurar e corrigir código de forma inteligente usando o **Gemini CLI**.

## O Problema
O arquivo `buggy_inventory.js` contém uma lógica de inventário que permite que o estoque fique negativo. É um erro lógico comum que pode passar despercebido em revisões superficiais.

## O Desafio
Copie e cole o comando abaixo no seu terminal para ver como a IA resolve o problema passo a passo:

```bash
gemini "Analise o arquivo encontros/01-fundamentos-e-prompt-engineering/demo-cot/buggy_inventory.js.
Siga estes passos (CoT):
1. Identifique a falha lógica no método processOrder.
2. Explique como essa falha impacta o sistema em um cenário real.
3. Proponha uma correção que siga o princípio de validação defensiva.
4. Gere o código corrigido."
```

## O que observar na resposta?
1.  **Raciocínio Lógico:** Note como a IA primeiro "entende" o erro antes de tentar corrigi-lo.
2.  **Contextualização:** Ela explicará o impacto (ex: prejuízo financeiro, dados inconsistentes).
3.  **Qualidade da Correção:** A solução proposta geralmente será mais robusta do que uma simples correção de "if/else".
