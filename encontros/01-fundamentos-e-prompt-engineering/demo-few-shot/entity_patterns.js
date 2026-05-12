/**
 * Padrão de Entidade: User
 */
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      userName: this.name.toUpperCase(),
      userEmail: this.email.toLowerCase(),
      active: true
    };
  }
}

/**
 * DESAFIO: Criar a classe Product seguindo o MESMO PADRÃO acima.
 * O produto deve ter: id, title, price.
 * No toJSON, o title deve ser em UPPERCASE e o preço deve ser formatado.
 */
