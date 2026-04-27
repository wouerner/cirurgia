# Ideias de Projeto e Exercícios - Encontro 06

Desafios para criar seus próprios robôs e fluxos autônomos.

## Exercício 1: O "Bot" de Onboarding
**Objetivo:** Criar uma ferramenta que explica o projeto para novos devs.
1. Desenvolva um script que, ao ser rodado, usa o Gemini para gerar um resumo do que mudou no projeto desde o último acesso do usuário.
2. Peça para a IA identificar as áreas mais "quentes" (com mais mudanças) do código.

## Exercício 2: Automação de Triagem de Logs
**Objetivo:** Filtrar o ruído e focar no que importa.
1. Pegue um arquivo de log sujo e extenso.
2. Crie um script que envia blocos desse log para o Gemini e pede para ele classificar os erros por gravidade e sugerir correções para os erros de "Nível Crítico".

## Exercício 3: Delegando uma Feature Completa
**Objetivo:** Testar os limites da autonomia.
1. Defina uma feature pequena mas completa (ex: "Sistema de recuperação de senha via e-mail").
2. Dê a missão para o Gemini CLI: "Implemente o fluxo de recuperação de senha: 1. Rota de solicitação, 2. Geração de token, 3. Envio de e-mail (mock), 4. Rota de reset. Crie também os testes para cada etapa."
3. Acompanhe o agente trabalhando e intervenha apenas se ele ficar preso em um loop.
