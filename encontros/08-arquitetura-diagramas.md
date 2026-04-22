[<- Voltar ao Índice](../CURSO_ENGENHEIRO_IA.md)

# Encontro 08: Arquitetura, Diagramas e Trade-offs

## Tecnologias Recomendadas
- **Mermaid.js (Editor Live)**
- **Eraser.io**
- **ChatGPT (GPT-4 / Claude 3 Opus)**

## Teoria
A IA não deve apenas "cuspir" código, ela deve servir como uma **consultora sênior**. Em decisões de arquitetura, podemos pedir para ela analisar trade-offs entre, por exemplo, Monolito vs Microserviços para um caso específico.

### Visualização com Mermaid.js:
- A IA pode converter descrições textuais de infraestrutura em diagramas visuais (flowcharts, diagramas de classe, diagramas de arquitetura C4).

## Exemplos Práticos
### Prompt de Análise de Trade-off
"Estou em dúvida se uso Redis para cache ou apenas uma variável em memória. O volume de dados é de aproximadamente 1GB e o sistema é distribuído em 3 instâncias. Quais os trade-offs?"

## Sugestões de Ferramentas
- **Miro / Excalidraw:** Para esboçar fluxos antes de pedir à IA para "solidificar" a documentação visual.

## Exercício Prático
1. Desenhe a arquitetura atual do seu projeto em texto.
2. Peça à IA: "Sugira uma evolução dessa arquitetura para suportar 10x mais usuários, mantendo a consistência dos dados".
3. Gere o código Mermaid.js para essa nova proposta de arquitetura e visualize no editor online.
