# Ideias de Projeto e Exercícios - Encontro 04

Exercícios para transformar código confuso em arquitetura limpa e documentada.

## Exercício 1: O "God Object" Slayer
**Objetivo:** Desmembrar um arquivo gigante em módulos coesos.
1. Encontre o maior arquivo do seu projeto (o que faz "tudo").
2. Peça ao Gemini: "Identifique os 3 principais domínios de responsabilidade neste arquivo e crie um plano para extraí-los em arquivos separados."
3. Execute a extração usando sub-agentes e valide se o sistema continua funcionando.

## Exercício 2: Documentação Visual Viva
**Objetivo:** Criar um mapa visual do sistema.
1. Escolha um fluxo complexo (ex: processamento de pedidos).
2. Use o Gemini para gerar diagramas Mermaid de: 1. Fluxo de dados, 2. Entidade-Relacionamento (ERD) simplificado.
3. Cole o código gerado no [Mermaid Live Editor](https://mermaid.live/) e valide se o diagrama faz sentido.

## Exercício 3: Auditoria de Clean Code
**Objetivo:** Elevar o padrão de qualidade do código existente.
1. Peça à IA: "Atue como um revisor de código sênior obcecado por Clean Code. Analise este arquivo e aponte 'code smells', nomes de variáveis confusos e lógica duplicada."
2. Implemente as sugestões e compare o "antes" e "depois".
