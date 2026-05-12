# Desafio: Auditoria de Segurança 🛡️

Use o **Gemini CLI** como um especialista em cibersegurança para proteger seu código.

## O Cenário
O arquivo `auth_repository.js` contém uma função de login simplista. Será que ela é segura contra ataques comuns?

## O Desafio
Peça uma auditoria completa. Copie e cole:

```bash
gemini "Atue como um Especialista em Segurança de Aplicações (AppSec). 
Analise o arquivo encontros/01-fundamentos-e-prompt-engineering/demo-seguranca/auth_repository.js e:
1. Identifique vulnerabilidades críticas.
2. Explique como um atacante poderia explorar esse código (exemplo de payload).
3. Corrija o código usando Prepared Statements (ou bibliotecas adequadas).
4. Sugira outras boas práticas de segurança para este módulo."
```

## O que observar?
*   A capacidade da IA de identificar **SQL Injection** mesmo sem um banco de dados real rodando.
*   A explicação didática do ataque (ex: `' OR '1'='1`).
