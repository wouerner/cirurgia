# Desafio: Modo Plano (Plan Mode) 🗺️

O **Modo Plano** (`/plan`) é a funcionalidade mais avançada para arquitetura e mudanças em larga escala. Ele permite que a IA desenhe uma estratégia antes de tocar no código.

## O Cenário
Imagine que você precisa adicionar uma camada de cache (Redis) em todo o sistema de inventário que criamos anteriormente. É uma mudança que afeta múltiplos arquivos e infraestrutura.

## O Desafio
Diferente dos outros desafios, este é um **comando interativo**. Digite no seu terminal:

```bash
gemini
```

E quando o chat abrir, digite:

```bash
/plan "Preciso implementar uma camada de cache no InventoryManager que está em encontros/01-fundamentos-e-prompt-engineering/demo-cot/buggy_inventory.js. Considere que o cache deve expirar em 5 minutos e ser invalidado a cada novo pedido."
```

## O que observar?
1.  **Investigação:** A IA vai ler os arquivos relevantes.
2.  **Arquitetura:** Ela vai propor *como* fazer antes de *fazer*.
3.  **Segurança:** Nada será alterado até que você aprove o plano.

> **Nota:** O Modo Plano é ideal para quando você está "perdido" em um projeto grande e precisa de um norte estratégico.
