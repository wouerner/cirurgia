[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 05: Arquitetura, Infraestrutura e DevSecOps

## Tecnologias Recomendadas
- **Docker / Kubernetes (K8s)**
- **Terraform / AWS CDK**
- **Gemini CLI (Flash / Pro models)**

## Teoria
A IA não serve apenas para escrever funções, ela pode ser uma **Consultora de Arquitetura**. Desde o design de sistemas distribuídos até a criação de arquivos de infraestrutura como código (IaC), a IA ajuda a validar trade-offs e acelerar o setup de ambientes de deploy. No campo de **DevSecOps**, ela atua identificando vulnerabilidades e sugerindo correções preventivas.

### Consultoria de Arquitetura:
- **Trade-offs:** Analisar se uma arquitetura baseada em microserviços ou monolítica é melhor para o cenário atual.
- **Design Patterns de Infra:** Sugerir políticas de escalabilidade e alta disponibilidade.

### Infra e Segurança:
- **IaC Automatizado:** Geração de arquivos Dockerfile, Docker Compose e scripts Terraform.
- **Segurança (DevSecOps):** Escaneamento de código em busca de vulnerabilidades (ex: SQL Injection, Hardcoded Secrets).

## Exemplos Práticos
### Prompt de Consultoria de Arquitetura
"Abaixo está o diagrama do meu sistema atual. Sugira uma evolução dessa arquitetura para suportar 10% mais usuários, mantendo a consistência dos dados e explicando os trade-offs de latência."

### Prompt de Geração de Infra
"Gere um arquivo Dockerfile otimizado para uma aplicação Node.js (Alpine Linux) e um Docker Compose que inclua o banco de dados PostgreSQL e um serviço de cache Redis."

## Sugestões de Ferramentas
- **Trivy / Snyk:** Para validar os arquivos de infra gerados pela IA.
- **AWS Architecture Icons:** Para referência visual em diagramas.

## Exercício Prático
1. Peça à IA para analisar seu `package.json` ou `requirements.txt` em busca de dependências com vulnerabilidades conhecidas.
2. Gere um setup completo de deploy (Dockerfile + CI/CD config) para um projeto simples do seu repositório.
3. Descreva um problema de escala (ex: "meu banco está lento em horários de pico") e peça uma solução arquitetural baseada em cache ou mensageria.
