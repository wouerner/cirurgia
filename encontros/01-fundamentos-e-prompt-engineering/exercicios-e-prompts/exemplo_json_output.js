/**
 * Exemplo de Output Structuring (JSON)
 * Garante que a resposta seja parseável programaticamente.
 */

const jsonPrompt = {
  role: "system",
  content: `Extraia as tecnologias mencionadas no texto. 
  Responda APENAS com um objeto JSON no formato: 
  { "languages": [], "frameworks": [], "databases": [] }. 
  Não inclua explicações ou markdown.`
};

console.log("Prompt de Extração Estruturada pronto.");
