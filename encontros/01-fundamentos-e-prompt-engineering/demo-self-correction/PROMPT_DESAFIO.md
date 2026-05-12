# Desafio: Self-Correction (Auto-Correção) 🔄

Este desafio demonstra como pedir para a IA revisar o próprio trabalho antes de te entregar o resultado final.

## O Cenário
O arquivo `flawed_algorithm.js` contém uma busca binária com bugs de lógica (loop infinito em certos casos) e ineficiências.

## O Desafio
Peça para a IA analisar, encontrar o erro e se auto-corrigir antes de enviar. Copie e cole:

```bash
gemini "Analise o arquivo encontros/01-fundamentos-e-prompt-engineering/demo-self-correction/flawed_algorithm.js.
Siga estas instruções:
1. Escreva uma análise inicial do código.
2. Identifique bugs de lógica (dica: olhe os ponteiros left/right).
3. AGORA, aja como seu próprio revisor: Tente encontrar uma falha na sua primeira análise.
4. Forneça o código final corrigido e otimizado."
```

## Por que isso é importante?
Modelos de IA às vezes "atropelam" a lógica na primeira tentativa. Forçar uma etapa de auto-revisão (Self-Correction) aumenta drasticamente a precisão em algoritmos complexos.
