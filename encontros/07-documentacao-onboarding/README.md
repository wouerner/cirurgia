[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 07: Documentação e Onboarding Automatizado

## Tecnologias Recomendadas
- **Docosaurus / GitBook**
- **Mermaid.js**
- **Doxygen / JSDoc**

## Teoria
A documentação é frequentemente negligenciada. Com a IA, podemos transformá-la em uma **documentação viva**. Ela pode ler o código e gerar um README completo, guias de instalação e até diagramas de fluxo de dados.

### Uso para Onboarding:
- **Resumo de Repositório:** Peça à IA para descrever a estrutura de um projeto que você acabou de clonar.
- **Geração de Comentários:** Automatizar a criação de docstrings e comentários JSDoc.

## Exemplos Práticos
### Prompt para README
"Gere um arquivo README.md profissional para o meu projeto, incluindo seções de: Pré-requisitos, Como Rodar Localmente, Exemplos de Uso da API e Contribuição. Use o código do repositório como base."

## Sugestões de Ferramentas
- **Swagger/OpenAPI:** Gere documentação interativa para sua API a partir dos seus arquivos de rotas.

## Exercício Prático
1. Escolha um repositório seu que esteja sem documentação.
2. Peça ao Gemini CLI: "Gere um diagrama de sequência em Mermaid.js que mostre o fluxo de uma requisição de login desde o Controller até o Banco de Dados".
3. Crie um arquivo `DOCUMENTATION.md` e peça para a IA listar todos os endpoints da sua aplicação e suas entradas/saídas.
