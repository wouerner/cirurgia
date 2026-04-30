/**
 * Exemplo de System Prompt com Chain-of-Thought (CoT)
 * Força o modelo a "pensar alto" e estruturar o raciocínio.
 */

const cotSystemPrompt = {
  role: "system",
  content: `Ao resolver problemas:
  1. Analise os requisitos silenciosamente.
  2. Liste os passos lógicos necessários.
  3. Explique o raciocínio por trás de cada decisão.
  4. Forneça a solução final apenas após a validação dos passos.`
};

// Exemplo de como isso seria enviado em uma API
console.log("Instrução CoT ativa:", cotSystemPrompt.content);
