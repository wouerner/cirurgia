# Prompts Essenciais - Encontro 05

Foco em Arquitetura de Sistemas, Infraestrutura como Código (IaC) e Segurança.

## 1. Consultoria de Escalabilidade
```text
Minha arquitetura atual consiste em [DESCREVA: EX. MONOLITO NODE + POSTGRES]. Como posso evoluir este sistema para suportar 10x mais tráfego sem comprometer a latência? Sugira o uso de cache, mensageria e bancos de leitura.
```

## 2. Geração de Dockerfile Otimizado
```text
Gere um Dockerfile para uma aplicação [LINGUAGEM/FRAMEWORK]. Use uma imagem base leve (Alpine/Slim), implemente multi-stage build e garanta que o container não rode como root por segurança.
```

## 3. Auditoria de Segurança (Hardcoded Secrets)
```text
Analise meu repositório em busca de segredos (chaves de API, senhas, tokens) que possam ter sido commitados por engano. Sugira também uma configuração de `.gitignore` e `.dockerignore` mais robusta.
```

## 4. Geração de Scripts Terraform / IaC
```text
Crie um script Terraform básico para subir uma instância [EX: AWS EC2 ou S3 Bucket] com as políticas de acesso mínimo necessárias (least privilege).
```
