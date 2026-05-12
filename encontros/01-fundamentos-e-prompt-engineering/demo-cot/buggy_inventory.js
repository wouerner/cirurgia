/**
 * Sistema de Gerenciamento de Inventário (com bug lógico proposital)
 * Objetivo: Demonstrar como o CoT identifica falhas de fluxo.
 */

class InventoryManager {
  constructor() {
    this.stock = {
      'laptop': 10,
      'mouse': 50,
      'teclado': 25
    };
  }

  /**
   * BUG: O sistema não valida se a quantidade solicitada é maior que o estoque
   * antes de subtrair, resultando em estoque negativo.
   * Além disso, a função retorna true mesmo se a operação for inválida.
   */
  processOrder(item, quantity) {
    console.log(`Processando pedido: ${quantity}x ${item}`);
    
    // Simulação de verificação (propositalmente incompleta)
    if (this.stock[item]) {
      this.stock[item] -= quantity;
      return true;
    }
    
    return false;
  }

  getStatus() {
    return this.stock;
  }
}

// Simulação de uso
const manager = new InventoryManager();

console.log("Estoque Inicial:", manager.getStatus());

// Pedido impossível (solicitando mais do que tem)
const success = manager.processOrder('laptop', 15);

console.log("Pedido processado com sucesso?", success);
console.log("Estoque Final (Bug):", manager.getStatus());
