[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 08: Arquitetura, Diagramas e Trade-offs

## Tecnologias Recomendadas
- **Mermaid.js (Editor Live)**
- **Eraser.io**
- **ChatGPT (GPT-4 / Claude 3 Opus)**

## Teoria
A IA não deve apenas "cuspir" código, ela deve servir como uma **consultora sênior**. Em decisões de arquitetura, podemos pedir para ela analisar trade-offs entre, por exemplo, Monolito vs Microserviços para um caso específico.

### Visualização com Mermaid.js:
- A IA pode converter descrições textuais de infraestrutura em diagramas visuais (flowcharts, diagramas de classe, diagramas de arquitetura C4).

## Exemplos Práticos
### Prompt de Análise de Trade-off
"Estou em dúvida se uso Redis para cache ou apenas uma variável em memória. O volume de dados é de aproximadamente 1GB e o sistema é distribuído em 3 instâncias. Quais os trade-offs?"

## Sugestões de Ferramentas
- **Miro / Excalidraw:** Para esboçar fluxos antes de pedir à IA para "solidificar" a documentação visual.

## Exercício Prático
1. Desenhe a arquitetura atual do seu projeto em texto.
2. Peça à IA: "Sugira uma evolução dessa arquitetura para suportar 10x mais usuários, mantendo a consistência dos dados".
3. Gere o código Mermaid.js para essa nova proposta de arquitetura e visualize no editor online.
[<- Voltar ao Índice](../../CURSO_ENGENHEIRO_IA.md) | [📅 Ver Cronograma](cronograma.md)

# Encontro 09: IA para DevSecOps e Infraestrutura (IAC)

## Tecnologias Recomendadas
- **Docker / Docker Compose**
- **Terraform / CloudFormation**
- **Snyk / Checkov**

## Teoria
**Infraestrutura como Código (IaC)** pode ser complexa de manter. A IA ajuda a criar manifestos Kubernetes, arquivos Dockerfile otimizados e scripts Terraform sem que você precise decorar toda a sintaxe.

### Foco em Segurança:
- **Análise Estática de Segurança (SAST):** Peça para a IA identificar se há chaves expostas ou se as imagens Docker estão rodando como root.

## Exemplos Práticos
### Prompt de Criação de Infraestrutura
"Crie um Dockerfile otimizado para uma aplicação Node.js usando multi-stage build para reduzir o tamanho da imagem final. Garanta que a aplicação rode com um usuário não-root."

## Sugestões de Ferramentas
- **Terraform Cloud:** Para gerenciar o estado da sua infraestrutura gerada por IA.

## Exercício Prático
1. Crie um arquivo `docker-compose.yml` para seu projeto que inclua a aplicação, um banco de dados PostgreSQL e um serviço de cache Redis.
2. Peça à IA: "Revise meu código em busca de vulnerabilidades de segurança como Injeção de SQL ou Broken Access Control".
3. Gere um script Terraform básico para subir uma instância na AWS (EC2 ou S3 bucket).
