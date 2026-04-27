# Prompts Essenciais - Encontro 03

Foco em Testes, Debugging e Análise de Causa Raiz (RCA).

## 1. Geração de Testes Unitários com Edge Cases
```text
Analise o arquivo [CAMINHO_DO_ARQUIVO] e gere uma suíte de testes unitários usando [FRAMEWORK]. Garanta a cobertura de caminhos felizes e, principalmente, de edge cases como: inputs nulos, valores extremos e erros de rede simulados.
```

## 2. Debugging Agentic (Análise de Erro)
Em vez de pedir para "corrigir", peça para "analisar".
```text
Estou recebendo o seguinte erro no terminal: [COLE_O_ERRO]. Investigue no meu código a causa raiz desse problema e me explique por que ele está acontecendo antes de propor a correção.
```

## 3. Criação de Mocks Complexos
```text
Crie um mock de dados para a entidade [NOME] que seja compatível com a interface definida em [ARQUIVO]. O mock deve conter pelo menos 10 variações diferentes para testarmos a ordenação da listagem.
```

## 4. Conversão de Logs em Insight
```text
Aqui está um trecho dos logs de produção: [COLE_LOGS]. Identifique padrões de falha e me aponte quais arquivos do projeto podem estar relacionados a esses erros.
```
