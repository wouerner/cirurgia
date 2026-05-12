# Desafio: Few-Shot Prompting 🏗️

A técnica de **Few-Shot** consiste em dar exemplos à IA para que ela siga um padrão específico de implementação ou estilo de código.

## O Cenário
No arquivo `entity_patterns.js`, temos uma classe `User` com um estilo específico de `toJSON`. Precisamos criar uma classe `Product` que siga exatamente esse "jeito" de codar.

## O Desafio
Ensine o padrão e peça a nova implementação. Copie e cole:

```bash
gemini "Baseado no padrão de implementação da classe User no arquivo encontros/01-fundamentos-e-prompt-engineering/demo-few-shot/entity_patterns.js, crie uma nova classe chamada Product.
A classe Product deve:
1. Receber id, title e price no constructor.
2. Seguir a mesma estrutura de campos do toJSON (ex: prefixar nomes com a entidade, incluir campo active).
3. O title deve ser UPPERCASE no toJSON."
```

## Por que Few-Shot?
1.  **Padronização:** Garante que todo o time siga o mesmo estilo de código, mesmo usando IA.
2.  **Contexto Local:** A IA aprende "na hora" como seu projeto funciona.
