# Prompts Essenciais para o Encontro 01

Estes prompts foram desenhados para serem usados diretamente no terminal com o **Gemini CLI**, focando em produtividade e clareza de intenção.

## 1. Alinhamento de Contexto e Arquitetura
Antes de codar, peça para a IA entender o projeto e propor a estrutura.

> "Atue como um Arquiteto de Software Sênior. Analise o diretório atual e proponha uma estrutura de pastas para um projeto de [NOME DO PROJETO] seguindo os princípios de Clean Architecture e SOLID. Não escreva código ainda, apenas explique a estrutura."

## 2. Geração de Código com Testes (TDD)
O Gemini CLI é excelente para criar lógica e testes simultaneamente.

> "Crie um módulo em [LINGUAGEM] para [FUNCIONALIDADE]. Inclua validações de erro robustas e gere um arquivo de testes unitários utilizando [FRAMEWORK DE TESTE]. Garanta que o código siga as melhores práticas de Clean Code."

## 3. Exploração e Auditoria de Código
Use para entender projetos legados ou códigos complexos.

> "Analise os arquivos do projeto e identifique possíveis vulnerabilidades de segurança ou débitos técnicos. Priorize os 3 problemas mais críticos e sugira como corrigi-los."

## 4. Documentação Automática
Mantenha o README e a documentação de API sempre atualizados.

> "Leia o código da minha API e gere uma documentação em Markdown detalhando os endpoints, parâmetros de entrada, tipos de retorno e exemplos de chamadas CURL."

## 5. Refatoração Cirúrgica
Peça melhorias específicas em funções existentes.

> "Refatore a função [NOME_DA_FUNCAO] no arquivo [NOME_DO_ARQUIVO] para reduzir a complexidade ciclomática e melhorar a legibilidade. Mantenha a compatibilidade com os testes existentes."
