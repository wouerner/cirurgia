# Prompts Essenciais: Código Limpo e Qualidade

Estes prompts focam em Testes, Debugging (RCA), Refatoração SOLID e Documentação Técnica.

## 1. Qualidade e Blindagem (Testes)
Use para criar proteções robustas em torno da sua lógica de negócio.

> **Cobertura com Edge Cases:** "Analise [ARQUIVO] e gere uma suíte de testes com [FRAMEWORK]. Cubra caminhos felizes e edge cases: inputs nulos, valores extremos e erros simulados."

> **Mocks Complexos:** "Crie um mock de dados para a entidade [NOME] compatível com [ARQUIVO]. O mock deve conter variações para testarmos ordenação e filtragem."

## 2. Investigação e Debugging (RCA)
Para quando o erro é difícil de rastrear.

> **Análise de Causa Raiz:** "Estou recebendo este erro: [COLE O ERRO]. Investigue no meu código a causa raiz deste problema antes de propor qualquer correção."

> **Insight de Logs:** "Aqui estão logs de produção: [COLE LOGS]. Identifique padrões de falha e aponte quais arquivos podem estar relacionados a esses erros."

## 3. Refatoração e Arquitetura (SOLID)
Transforme código confuso em sistemas modulares.

> **Refatoração para SRP:** "Analise [ARQUIVO] e identifique múltiplas responsabilidades. Proponha uma refatoração dividindo o código seguindo o princípio SRP."

> **Explicação de Legado:** "Eu herdei este código: [COLE O CÓDIGO]. Explique em linguagem simples o que ele faz, seus efeitos colaterais e sugira 3 melhorias de legibilidade."

## 4. Documentação Técnica Automatizada
Mantenha o conhecimento do projeto acessível.

> **Diagrama de Sequência:** "Com base no código de [ARQUIVO], gere um diagrama de sequência Mermaid.js que ilustre o fluxo de dados completo."

> **README de Módulo:** "Gere um `README.md` técnico para a pasta [CAMINHO]. Inclua descrição da arquitetura, dependências e exemplos de uso das funções exportadas."
