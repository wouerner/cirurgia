[<- Voltar ao Índice](../CURSO_ENGENHEIRO_IA.md)

# Encontro 02: IDEs Modernas (Cursor) e Pair Programming

## Tecnologias Recomendadas
- **Cursor IDE (Fork do VS Code)**
- **Composer (Cursor feature)**
- **GitHub Copilot Chat**

## Teoria
**Contexto é Rei.** A grande diferença entre usar o ChatGPT no navegador e usar uma IDE como o Cursor é o acesso ao contexto do projeto. O Cursor indexa seus arquivos locais (embeddings) para que a IA "saiba" como suas funções se conectam.

### Recursos Chave:
- `@Symbols`: Referencia funções ou classes específicas.
- `@Files`: Dá contexto de arquivos inteiros.
- `@Docs`: Permite que a IA leia documentações externas atualizadas.

## Exemplos Práticos
### Uso do Composer (Cmd+I)
"Crie uma nova rota de API em Express para gerenciar usuários, seguindo o padrão que já usamos no arquivo `@userController.ts`. Certifique-se de incluir validação de schema com Zod."

## Sugestões de Ferramentas
- **Cursor Directory (.cursorrules):** Configure regras globais para que a IA sempre siga seu guia de estilo.

## Exercício Prático
1. Abra um projeto existente no Cursor.
2. Use o `Cmd+L` (Chat) para perguntar: "Explique como funciona o fluxo de autenticação neste projeto".
3. Use o `Cmd+I` (Composer) para criar uma nova funcionalidade (ex: um botão de 'Esqueci minha senha') que envolva mudanças em múltiplos arquivos simultaneamente.
