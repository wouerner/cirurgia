[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 04: Engenharia Reversa: Refatoração e Documentação

## Tecnologias Recomendadas
- **Mermaid.js** (Diagramas)
- **SonarQube / ESLint**
- **Gemini CLI (Refactoring Mode)**

## Teoria
Código legado não é apenas código antigo, é código sem testes e difícil de entender. A IA pode atuar na **Engenharia Reversa**, ajudando a entender o propósito de um código complexo e sugerindo refatorações baseadas em **SOLID e Clean Code**. Além disso, ela pode manter a **Documentação Viva**, gerando diagramas e READMEs técnicos sempre atualizados.

### Refatoração Assistida:
- **Code Smells:** Identificação automática de acoplamento excessivo ou funções gigantes.
- **Tipagem Estrita:** Conversão de código JS dinâmico para TS tipado e seguro.
- **Modularização:** Divisão de arquivos complexos em componentes menores e testáveis.

### Documentação Automática:
- **Diagramas de Fluxo:** Geração de código Mermaid.js a partir da lógica do código.
- **READMEs Técnicos:** Descrição clara da arquitetura e como rodar o projeto.

## Exemplos Práticos
### Prompt de Refatoração SOLID
"Refatore esta classe `OrderManager` para seguir o Princípio de Responsabilidade Única (SRP), separando a lógica de validação da lógica de persistência."

### Prompt de Documentação Visual
"Analise este fluxo de pagamento e gere um diagrama de sequência Mermaid.js mostrando as interações entre o frontend, backend e o gateway de pagamento."

## Sugestões de Ferramentas
- **Mermaid Live Editor:** Para visualizar os diagramas gerados pela IA.
- **Doxygen / JSDoc:** Para estruturar a documentação de código.

## Exercício Prático
1. Escolha um "arquivo espaguete" no seu repositório.
2. Peça ao Gemini CLI: "Explique o que este arquivo faz em alto nível e sugira 3 refatorações para torná-lo mais legível".
3. Gere um `README_TECNICO.md` para uma pasta específica do seu projeto, incluindo um diagrama visual da estrutura de dados.
