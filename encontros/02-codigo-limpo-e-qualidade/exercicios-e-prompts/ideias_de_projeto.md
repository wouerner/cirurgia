# Ideias de Projetos Práticos (Nível: Código Limpo e Qualidade)

Estes desafios focam em blindar seu código com testes, resolver bugs complexos e transformar código legado em arquitetura limpa.

## 1. Missão Cobertura 80% (Blindagem)
**Objetivo:** Atingir alta cobertura de testes em um módulo crítico.
- **Desafio:** Escolha um `.service` sem testes. Use o Gemini para gerar testes cobrindo todos os `if/else`. Analise o relatório de coverage e peça para a IA completar as lacunas.
- **Destaque:** Pratique o TDD assistido gerando os mocks de banco de dados automaticamente.

## 2. O "God Object" Slayer (Refatoração)
**Objetivo:** Desmembrar um arquivo gigante em módulos coesos.
- **Desafio:** Encontre o maior arquivo do projeto. Peça ao Gemini: "Identifique as responsabilidades deste arquivo e crie um plano para extraí-las seguindo o SOLID."
- **Destaque:** Valide a funcionalidade com testes unitários antes e depois da extração.

## 3. Investigação e RCA (Debugging)
**Objetivo:** Treinar a capacidade de análise de causa raiz da IA.
- **Desafio:** Introduza um bug sutil (ex: lógica de permissão) e peça à IA: "O sistema está apresentando comportamento inesperado. Investigue o código e encontre a anomalia."
- **Destaque:** Use logs reais para alimentar a IA e ver se ela identifica padrões de falha.

## 4. Documentação Visual Viva
**Objetivo:** Criar um mapa visual do sistema.
- **Desafio:** Escolha um fluxo complexo (ex: pagamentos). Use o Gemini para gerar diagramas Mermaid de fluxo de dados e sequência.
- **Destaque:** Cole no Mermaid Live Editor e valide se a arquitetura está clara.

## 5. Auditoria de Clean Code
**Objetivo:** Elevar o padrão de qualidade do repositório.
- **Desafio:** Peça à IA: "Atue como um revisor sênior. Analise este arquivo e aponte 'code smells' e lógica duplicada."
- **Destaque:** Implemente as 3 melhorias mais críticas sugeridas.
