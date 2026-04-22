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
