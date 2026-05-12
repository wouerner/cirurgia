# Exemplo de Chain-of-Thought (CoT) no Terminal

O **Chain-of-Thought (Cadeia de Pensamento)** é uma técnica de engenharia de prompt que força a IA a processar informações em etapas lógicas antes de entregar a resposta final. No terminal, isso é extremamente poderoso para resolver problemas complexos de arquitetura, depuração ou refatoração.

Abaixo estão exemplos que você pode copiar, colar e adaptar.

---

## 1. CoT para Refatoração Segura
Use este prompt quando precisar mexer em um código crítico e quiser garantir que nada vai quebrar.

```bash
gemini "Vou refatorar o arquivo [CAMINHO_DO_ARQUIVO]. Siga estes passos:
1. Analise o código atual e identifique as dependências.
2. Liste os riscos potenciais da refatoração.
3. Proponha um plano de execução passo a passo para mitigar esses riscos.
4. Aguarde minha confirmação antes de sugerir o novo código."
```

## 2. CoT para Resolução de Bugs (Debug Profundo)
Ideal para erros intermitentes ou de lógica complexa.

```bash
gemini "Estou enfrentando o erro [DESCREVA_O_ERRO] no módulo [NOME_DO_MODULO]. 
Pense passo a passo:
1. Quais são as causas prováveis baseadas na estrutura atual do projeto?
2. Como podemos testar cada uma dessas hipóteses isoladamente?
3. Proponha uma correção para a causa mais provável e explique o porquê."
```

## 3. CoT para Planejamento de Arquitetura
Use para desenhar novas funcionalidades do zero.

```bash
gemini "Preciso implementar uma nova feature de [NOME_DA_FEATURE].
Execute o raciocínio em cadeia:
1. Liste os requisitos funcionais e não-funcionais implícitos.
2. Desenhe a estrutura de dados necessária.
3. Escolha o padrão de projeto (Design Pattern) mais adequado e justifique.
4. Esboce a interface pública (API/Métodos) antes de implementar a lógica."
```

---

## Por que usar CoT no Terminal?

1.  **Redução de Alucinação:** Ao forçar a IA a explicar o passo a passo, a chance dela inventar fatos diminui drasticamente.
2.  **Rastreabilidade:** Você consegue ver *onde* o raciocínio da IA falhou, se for o caso, e corrigir apenas aquele ponto.
3.  **Aprendizado:** Ao ler a cadeia de pensamento da IA, você muitas vezes aprende novos padrões ou riscos que não tinha considerado.

> **Dica:** Se a resposta for muito longa, o Gemini CLI pode truncar ou você pode perder o fio da meada. Nesses casos, peça para ele executar apenas o 'Passo 1' e aguardar seu comando para o 'Passo 2'.
