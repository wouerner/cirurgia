# Prompts Essenciais - Encontro 02

Neste encontro, focamos em como estruturar prompts para tirar o máximo proveito do Gemini CLI como um Agente Orquestrador.

## 1. Prompt de Análise Arquitetural (Exploração)
Use este prompt para entender como uma funcionalidade está implementada antes de alterá-la.
```text
Analise o fluxo de [FUNCIONALIDADE] neste repositório. Identifique todos os arquivos envolvidos, desde a rota de API até a persistência no banco, e me explique a responsabilidade de cada um.
```

## 2. Chain-of-Thought para Refatoração Complexa
Força a IA a planejar antes de executar.
```text
Eu preciso refatorar o módulo de [NOME]. Primeiro, liste todos os possíveis impactos dessa mudança. Segundo, proponha um plano de execução passo a passo. Terceiro, aguarde minha confirmação para começar a aplicar as mudanças.
```

## 3. Few-Shot para Padronização de Código
Ensine o padrão do seu projeto para a IA.
```text
Siga o padrão de implementação abaixo para criar um novo Service:

Exemplo:
// ... (cole um exemplo de código bom do seu projeto)

Agora, crie o Service para a entidade [NOME_DA_ENTIDADE] seguindo exatamente esta estrutura e nível de tipagem.
```

## 4. Uso do Plan Mode para Features End-to-End
```text
Entre em modo de planejamento (plan mode) e desenhe a implementação da feature [NOME_DA_FEATURE]. Considere que precisamos seguir o padrão Repository e garantir que o código seja 100% testável.
```
