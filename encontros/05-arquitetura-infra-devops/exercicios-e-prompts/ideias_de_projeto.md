# Ideias de Projeto e Exercícios - Encontro 05

Desafios para agir como um Arquiteto e Engenheiro de Infraestrutura.

## Exercício 1: Containerização Profissional
**Objetivo:** Preparar uma aplicação para rodar em qualquer lugar.
1. Pegue um projeto local que rode "na sua máquina".
2. Peça ao Gemini para gerar o `Dockerfile` e o `docker-compose.yml` (incluindo banco e cache).
3. Tente rodar o projeto apenas via Docker. Se falhar, peça para a IA analisar o log de erro do container.

## Exercício 2: Auditoria DevSecOps
**Objetivo:** Encontrar vulnerabilidades antes dos hackers.
1. Peça à IA: "Analise meu arquivo de dependências ([package.json/requirements.txt/etc]) e verifique se há bibliotecas com vulnerabilidades conhecidas (CVEs)."
2. Peça também: "Analise este código em busca de possíveis falhas de Injeção de SQL ou Cross-Site Scripting (XSS)."

## Exercício 3: O Consultor de Nuvem
**Objetivo:** Desenhar uma arquitetura moderna.
1. Descreva um cenário de negócio (ex: "uma rede social de fotos que precisa de alta disponibilidade").
2. Peça ao Gemini para desenhar a arquitetura de nuvem (ex: AWS) ideal, listando os serviços necessários e justificando cada escolha.
