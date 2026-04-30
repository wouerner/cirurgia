/**
 * Exemplo de Few-Shot Prompting em JavaScript
 * Fornece exemplos reais para moldar o comportamento do modelo.
 */

const fewShotPrompt = [
  { role: "system", content: "Transforme descrições de bugs em títulos técnicos curtos para Jira." },
  
  // Shot 1 (Exemplo 1)
  { role: "user", content: "O botão de login não funciona quando o usuário clica rápido demais no mobile." },
  { role: "assistant", content: "Bug: Race Condition no Login (Mobile)" },
  
  // Shot 2 (Exemplo 2)
  { role: "user", content: "A imagem de perfil está cortando o topo da cabeça dos usuários na página de configurações." },
  { role: "assistant", content: "UI: Erro de Object-Fit no Avatar (Settings)" },
  
  // O próximo 'user' agora seguirá este padrão automaticamente
  { role: "user", content: "O sistema cai se eu tentar subir um PDF de mais de 50MB." }
];

console.log("Exemplo de Few-Shot configurado com", fewShotPrompt.length, "mensagens.");
