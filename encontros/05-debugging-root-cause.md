[<- Voltar ao Índice](../CURSO_ENGENHEIRO_IA.md)

# Encontro 05: Debugging e Root Cause Analysis (RCA)

## Tecnologias Recomendadas
- **Sentry / LogRocket**
- **Docker Logs**
- **Terminal do Cursor (Terminal Chat)**

## Teoria
Depurar não é apenas ler a mensagem de erro, mas entender a **causa raiz**. Com a IA, podemos colar logs gigantes e pedir correlações. A IA brilha ao explicar erros que ocorrem apenas em produção devido a condições de corrida ou falhas silenciosas.

### Workflow de RCA:
1. Cole o stack trace no chat.
2. Peça: "Explique o que pode estar causando este erro com base nos arquivos `@auth.service.ts` e `@database.ts`".

## Exemplos Práticos
### Prompt de Análise de Logs
"Abaixo estão os logs de 5 minutos do meu serviço. Identifique se existe um padrão de falha nas requisições que retornam status 500."

## Sugestões de Ferramentas
- **Kibana/Splunk AI Integration:** Para análise de dados de observabilidade.

## Exercício Prático
1. Force um erro intencional no seu código (ex: uma variável nula em um objeto aninhado).
2. Cole o erro no Cursor e use o comando "Fix" para ver se a solução sugerida é paliativa ou estrutural.
3. Peça à IA para explicar por que aquele erro aconteceu.
