/**
 * Exemplo simples de System Prompt em JavaScript
 * Define a personalidade e as regras básicas do assistente.
 */

const systemPrompt = {
  role: "system",
  content: "Você é um mentor sênior de JavaScript. Responda de forma concisa e sempre sugira uma boa prática de Clean Code ao final de cada explicação."
};

console.log("System Prompt configurado:", systemPrompt.content);
