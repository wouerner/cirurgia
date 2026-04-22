[<- Voltar ao Índice](../CURSO_ENGENHEIRO_IA.md)

# Encontro 03: Prompt Engineering para Desenvolvedores

## Tecnologias Recomendadas
- **Claude.ai (Artifacts)**
- **ChatGPT (GPTs customizados)**
- **Prompts estruturados em Markdown**

## Teoria
Prompting para código não é apenas pedir "faça um login". Envolve técnicas como **Chain-of-Thought** (pedir para a IA pensar passo a passo) e **Role Prompting**. Para resultados de nível sênior, o prompt deve ser estruturado.

### Técnicas de Ouro:
- **Few-Shot Prompting:** Dê 1 ou 2 exemplos de como você quer o código antes de pedir a tarefa real.
- **Pseudocódigo Guiado:** Escreva os comentários da lógica e peça para a IA preencher o código.

## Exemplos Práticos
### Prompt Estruturado (System Prompt)
"Você é um especialista em TypeScript e Design Patterns. Ao gerar código, priorize a imutabilidade e use o padrão 'Factory' para criação de objetos. Se houver múltiplas formas de resolver, apresente os trade-offs de performance."

## Sugestões de Ferramentas
- **PromptPerfect:** Para otimização de prompts complexos.
- **GitHub Gists:** Para salvar seus "Power Prompts" de desenvolvimento.

## Exercício Prático
1. Escolha um Design Pattern complexo (ex: Strategy ou Observer).
2. Escreva um prompt que peça a implementação desse pattern em um cenário real (ex: sistema de notificações), mas force a IA a explicar a lógica *antes* de cuspir o código.
3. Refine o resultado pedindo para adicionar tipagem estrita e tratamento de erros.
