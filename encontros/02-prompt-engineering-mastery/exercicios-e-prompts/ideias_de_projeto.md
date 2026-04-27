# Ideias de Projeto e Exercícios - Encontro 02

Pratique as técnicas de Prompt Engineering e Agentic Workflow com estes desafios.

## Exercício 1: O Detetive de Código
**Objetivo:** Explorar um repositório desconhecido usando o Gemini CLI.
1. Escolha um projeto open-source ou um projeto antigo seu.
2. Peça ao Gemini: "Encontre onde a lógica de [X] é processada e gere um resumo técnico de como as funções se comunicam."
3. **Desafio Extra:** Peça para ele encontrar um possível gargalo de performance ou uma violação de padrão de projeto.

## Exercício 2: Mudança Estrutural (Refatoração em Lote)
**Objetivo:** Validar a autonomia da IA em mudanças que afetam múltiplos arquivos.
1. Identifique uma entidade ou variável que é usada em todo o projeto.
2. Use o Gemini para renomeá-la em todos os lugares: "Renomeie a entidade [ANTIGO] para [NOVO] em todo o projeto, garantindo que imports, nomes de colunas no banco e testes sejam atualizados."
3. Verifique o plano proposto antes de autorizar a execução.

## Exercício 3: Implementador de Patterns
**Objetivo:** Usar Few-Shot para garantir qualidade.
1. Forneça um exemplo de um "Controller" perfeito do seu projeto.
2. Peça para a IA criar 3 novos controllers seguindo exatamente aquele modelo para diferentes entidades.
3. Avalie se a IA manteve a consistência de comentários, tratamento de erros e tipagem.
