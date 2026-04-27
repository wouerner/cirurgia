[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 02: Engenharia de Código Limpo e Qualidade

## Tecnologias Recomendadas
- **Vitest / Jest / Playwright**
- **Mermaid.js** (Diagramas)
- **Gemini CLI (Agentic Debugging & Refactoring)**

## Teoria
A IA é uma ferramenta poderosa para garantir a **resiliência** e a **manutenibilidade** do software. Ela atua em duas frentes críticas: o Ciclo de Qualidade (Testes/Debug) e a Engenharia Reversa (Refatoração/Documentação).

### Qualidade e Resiliência:
- **TDD Assistido:** Geração de testes unitários, integração e mocks complexos.
- **Edge Cases:** Identificação de cenários de borda que humanos costumam ignorar.
- **Agentic Debugging & RCA:** Análise de causa raiz explorando logs e stack traces para encontrar a origem real de falhas.

### Clean Code e Refatoração:
- **SOLID na Prática:** Identificação de *code smells* e refatoração de "objetos Deus" em módulos coesos.
- **Documentação Viva:** Geração automática de diagramas Mermaid.js, JSDoc e READMEs técnicos sempre atualizados.
- **Tipagem Segura:** Conversão de código legado para TypeScript tipado e seguro.

## Exemplos Práticos
### Prompt de Cobertura e Edge Cases
"Analise `calculateTax.ts` e gere testes unitários com Vitest cobrindo cenários normais e casos de borda como valores negativos, nulos e extremamente altos."

### Prompt de Refatoração SOLID
"Refatore a classe `OrderManager` para seguir o SRP (Responsabilidade Única), separando a lógica de validação da persistência."

### Prompt de Debugging RCA
"Abaixo estão os logs de erro. Pesquise no código onde esta falha pode estar sendo originada e sugira uma correção estrutural."

## Exercícios e Prática
- [💡 Ideias de Projeto](exercicios-e-prompts/ideias_de_projeto.md)
- [💬 Prompts Essenciais](exercicios-e-prompts/prompts_essenciais.md)

## Exercício Prático
1. Escolha um arquivo "espaguete" ou sem testes no seu repositório.
2. Peça ao Gemini CLI: "Explique o que este arquivo faz e gere uma suíte de testes unitários garantindo o isolamento do banco".
3. Use a segurança dos testes para pedir: "Refatore este arquivo seguindo os princípios de Clean Code e gere um diagrama Mermaid.js do novo fluxo".
