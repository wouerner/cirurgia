# Ideias de Projeto e Exercícios - Encontro 03

Desafios para blindar seu código e dominar o debugging assistido.

## Exercício 1: Missão Cobertura 80%
**Objetivo:** Atingir alta cobertura de testes em um módulo crítico.
1. Escolha um arquivo de lógica de negócio (`.service` ou `.utils`) que não possua testes.
2. Use o Gemini para gerar a base dos testes: "Gere testes unitários para este arquivo visando cobrir todas as condicionais (if/else)."
3. Rode o comando de coverage e peça para a IA: "O arquivo ainda tem 40% de cobertura. Analise o relatório de coverage e gere os testes que faltam para as linhas X a Y."

## Exercício 2: O Bug Intencional
**Objetivo:** Treinar a capacidade de investigação da IA.
1. Introduza um bug sutil em um arquivo (ex: troque um `>` por `>=` em uma validação de permissão).
2. Não diga à IA o que você fez. Diga apenas: "O sistema está apresentando um comportamento inesperado na permissão de usuários. Investigue o código e encontre a anomalia."
3. Veja se ela consegue identificar a falha lógica sozinha.

## Exercício 3: Automação de E2E
**Objetivo:** Criar testes de ponta a ponta sem dor.
1. Peça ao Gemini: "Gere um script de teste E2E usando Playwright para o fluxo de login e criação de post. Use seletores baseados em `data-testid`."
2. Se o seletor não existir, peça: "Adicione os `data-testid` necessários nos componentes de frontend para que o teste acima funcione."
