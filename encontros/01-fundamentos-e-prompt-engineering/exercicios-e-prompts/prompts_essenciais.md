# Prompts Essenciais: Fundamentos e Prompt Engineering

Estes prompts foram desenhados para serem usados diretamente no terminal com o **Gemini CLI**, focando em produtividade, clareza e uso de técnicas avançadas.

## 1. Exploração e Alinhamento de Contexto
Use estes prompts para entender o terreno antes de qualquer modificação.

> **Análise Arquitetural:** "Atue como um Arquiteto de Software Sênior. Analise o diretório atual e proponha uma estrutura de pastas para um projeto de [NOME DO PROJETO] seguindo os princípios de SOLID. Explique a responsabilidade de cada pasta."

> **Detetive de Fluxo:** "Analise o fluxo de [FUNCIONALIDADE] neste repositório. Identifique todos os arquivos envolvidos, da rota até o banco, e me explique a comunicação entre eles."

## 2. Geração de Código e TDD
O Gemini CLI é excelente para criar lógica robusta e testável.

> **TDD Assistido:** "Crie um módulo em [LINGUAGEM] para [FUNCIONALIDADE]. Primeiro, gere um arquivo de testes unitários com casos de borda. Depois, implemente a lógica que satisfaça esses testes seguindo o Clean Code."

> **Few-Shot (Padronização):** "Siga o padrão de implementação abaixo para criar um novo [TIPO DE ARQUIVO]: [COLE O EXEMPLO]. Agora, crie a versão para a entidade [NOME] seguindo exatamente esta estrutura."

## 3. Refatoração e Planejamento Agentic
Para mudanças complexas que exigem raciocínio passo a passo.

> **Chain-of-Thought:** "Eu preciso refatorar o módulo de [NOME]. Primeiro, liste todos os possíveis impactos dessa mudança. Segundo, proponha um plano de execução passo a passo. Aguarde minha confirmação para começar."

> **Plan Mode:** "Entre em modo de planejamento (`/plan`) e desenhe a implementação da feature [NOME]. Considere que precisamos garantir que o código seja 100% testável e siga o padrão Repository."

## 4. Documentação e Auditoria
Mantenha o projeto saudável e bem documentado.

> **Documentação Viva:** "Leia o código da minha API e gere um README detalhando os endpoints, parâmetros de entrada, tipos de retorno e exemplos de chamadas CURL."

> **Auditoria de Segurança:** "Analise os arquivos do projeto e identifique possíveis vulnerabilidades de segurança ou débitos técnicos críticos. Sugira correções imediatas."
