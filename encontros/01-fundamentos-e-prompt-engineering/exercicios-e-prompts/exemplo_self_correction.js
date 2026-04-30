/**
 * Exemplo de Self-Correction (Auto-Correção)
 * Faz com que a IA valide o próprio código antes de finalizar.
 */

const selfCorrectionPrompt = {
  role: "system",
  content: `Ao gerar código JavaScript:
  1. Escreva a solução inicial.
  2. Revise o código procurando por:
     - Variáveis não declaradas.
     - Erros de lógica em loops.
     - Falta de tratamento de erros (try/catch).
  3. Se encontrar erros, corrija-os silenciosamente.
  4. Entregue apenas a versão final e corrigida.`
};

console.log("Mecanismo de Auto-Correção configurado.");
