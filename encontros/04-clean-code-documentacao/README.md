[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 06: Refatoracao, SOLID e Clean Code

## Tecnologias Recomendadas
- **SonarQube AI**
- **ESLint / Prettier**
- **CodeRabbit (AI Code Reviews)**

## Teoria
Transformar "código legado" em "código moderno" é uma das maiores dores da engenharia. A IA pode detectar automaticamente **Code Smells** como funções muito longas, acoplamento excessivo e falta de coesão.

### Foco em SOLID:
- **S (SRP):** Pedir para quebrar uma classe gigante em componentes menores.
- **O (OCP):** Sugerir interfaces para extensibilidade sem alteração do original.

## Exemplos Práticos
### Prompt de Refatoração
"Refatore esta função `@LegacyOrder.js` aplicando o Single Responsibility Principle. Extraia a lógica de envio de e-mail e de cálculo de descontos para serviços separados."

## Sugestões de Ferramentas
- **Linter-to-AI:** Use as regras do ESLint para guiar a correção automática pela IA.

## Exercício Prático
1. Pegue um arquivo antigo ou "bagunçado" do seu projeto.
2. Use o prompt: "Analise este código e liste 3 melhorias de Clean Code e 2 de performance".
3. Aplique as refatorações sugeridas uma por uma, validando com os testes criados no Encontro 04.
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
