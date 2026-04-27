# Ideias de Projetos Práticos (Nível: Fundamentos e Prompting)

Estes projetos são ideais para praticar o workflow CLI-First, focando em automação, geração de lógica pura e técnicas de prompting.

## 1. Validador de Documentos Multiformato
**Objetivo:** Uma CLI ou módulo que valide CPFs, CNPJs, E-mails e Telefones.
- **Desafio:** Implementar algoritmos de verificação complexos e testes exaustivos para casos de borda.
- **Destaque:** Use o Gemini CLI para gerar os testes antes da implementação (TDD).

## 2. API de Gerenciamento de Tarefas (Minimalista)
**Objetivo:** Uma API REST básica em Node.js (Express) ou Python (FastAPI).
- **Desafio:** Criar endpoints CRUD e persistir em um arquivo JSON local seguindo o padrão "Repository".
- **Destaque:** Peça para a IA estruturar as pastas seguindo a Clean Architecture.

## 3. O Detetive de Código (Exploração)
**Objetivo:** Explorar um repositório desconhecido usando o Gemini CLI.
- **Desafio:** Escolha um projeto antigo seu. Peça ao Gemini: "Encontre onde a lógica de [X] é processada e gere um resumo técnico de como as funções se comunicam."
- **Destaque:** Identifique gargalos de performance ou violações de padrões de projeto apenas via terminal.

## 4. Auditor de Segurança e Segredos
**Objetivo:** Um utilitário que lê arquivos em busca de padrões de chaves de API ou segredos esquecidos.
- **Desafio:** Criar uma lista de padrões regex para identificar segredos comuns (AWS keys, Google keys).
- **Destaque:** Compare como a IA é rápida em gerar padrões de busca complexos.

## 5. Implementador de Patterns (Few-Shot)
**Objetivo:** Garantir a padronização do código.
- **Desafio:** Forneça um exemplo de um "Controller" perfeito do seu projeto e peça para a IA criar 3 novos controllers seguindo exatamente aquele modelo.
- **Destaque:** Avalie a consistência de comentários, tratamento de erros e tipagem.
