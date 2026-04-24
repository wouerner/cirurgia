# Ideias de Projetos Práticos (Nível 01)

Estes projetos são ideais para praticar o workflow CLI-First, focando em automação e geração de lógica pura.

## 1. Validador de Documentos Multiformato
**Objetivo:** Uma CLI ou módulo que valide CPFs, CNPJs, E-mails e Telefones.
- **Desafio:** Implementar validações complexas (algoritmos de verificação) e testes exaustivos para casos de borda.
- **Destaque:** Use o Gemini CLI para gerar os testes antes da implementação (TDD).

## 2. API de Gerenciamento de Tarefas (Minimalista)
**Objetivo:** Uma API REST básica em Node.js (Express) ou Python (FastAPI).
- **Desafio:** Criar endpoints CRUD para tarefas (titulo, status, data) e persistir em um arquivo JSON local.
- **Destaque:** Peça para a IA estruturar as pastas seguindo o padrão de "Repository" ou "Controller/Service".

## 3. Conversor de Unidades e Moedas via Terminal
**Objetivo:** Um script que aceite argumentos via linha de comando para converter medidas (peso, temperatura) e cotações de moedas.
- **Desafio:** Integrar com uma API pública de câmbio (opcional) ou usar valores fixos para conversão.
- **Destaque:** Use o Gemini CLI para ler a documentação de uma biblioteca como `axios` ou `fetch` para fazer as requisições.

## 4. Gerador de Templates de Projeto (Boilerplate)
**Objetivo:** Um script que cria automaticamente uma estrutura de pastas e arquivos iniciais (README, .gitignore, package.json).
- **Desafio:** Customizar a estrutura baseada no tipo de projeto (Frontend, Backend, CLI).
- **Destaque:** Observe como a IA consegue gerar múltiplos arquivos e subdiretórios de uma só vez.

## 5. Auditor de Segurança em Repositórios Locais
**Objetivo:** Um utilitário que lê arquivos do diretório atual em busca de padrões de chaves de API ou segredos esquecidos.
- **Desafio:** Criar uma lista de padrões regex (Regex) para identificar segredos comuns (AWS keys, Google keys).
- **Destaque:** Compare como a IA é rápida em gerar padrões de busca complexos.
