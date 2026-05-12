# Desafio: Guardrails e Output JSON 🛡️📦

Neste desafio, você aprenderá a controlar o formato da resposta da IA e a aplicar regras de segurança (Guardrails).

## O Cenário
Temos um arquivo `raw_logs.txt` com logs do sistema que contêm informações sensíveis (IPs e E-mails). Precisamos extrair esses dados para um formato JSON, mas por questões de conformidade (LGPD/GDPR), não podemos vazar IPs ou E-mails no resultado.

## O Desafio
Peça para a IA processar os logs com regras rígidas. Copie e cole:

```bash
gemini "Analise o arquivo encontros/01-fundamentos-e-prompt-engineering/demo-guardrails-json/raw_logs.txt e extraia os eventos.

REGRAS (Guardrails):
1. NUNCA inclua IPs ou E-mails no resultado. Substitua-os por '[REDACTED]'.
2. Responda APENAS em formato JSON válido.
3. Se não houver eventos de erro, inclua um campo 'status': 'clean'.

FORMATO DO JSON:
{
  'events': [
    { 'timestamp': '', 'level': '', 'message': '' }
  ]
}"
```

## O que observar?
*   **Conformidade:** Veja se a IA respeitou a regra de não mostrar os dados sensíveis.
*   **Parseabilidade:** O resultado deve ser um JSON limpo, pronto para ser usado por outro script.
