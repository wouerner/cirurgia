# Guia de Instalação Sem Root (Linux/macOS)

Neste guia, veremos como preparar seu ambiente e instalar o `@google/gemini-cli` de forma profissional, sem a necessidade de usar `sudo`.

## Passo 1: Configurando o Prefixo Global

Este passo garante que qualquer pacote instalado via `npm -g` vá para sua pasta de usuário, evitando erros de permissão e a necessidade de `sudo`.

1. **Crie o diretório para instalações globais:**
   ```bash
   mkdir ~/.npm-global
   ```

2. **Configure o seu Shell:**
   Adicione o novo caminho ao seu `PATH` para que o sistema encontre os comandos instalados:
   ```bash
   echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

3. **Configure o npm:**
   *(Nota: Se você ainda não tem o Node.js/npm instalado, realize o Passo 2 primeiro e depois execute este comando).*
   ```bash
   npm config set prefix '~/.npm-global'
   ```

## Passo 2: Instalando o Node.js (via n)

Se você ainda não tem o Node.js ou quer uma forma simples e leve de gerenciar versões sem precisar de root:

1. **Prepare o ambiente e o diretório de binários:**
   ```bash
   export N_PREFIX=$HOME/.n
   export PATH=$N_PREFIX/bin:$PATH
   mkdir -p $N_PREFIX/bin
   ```

2. **Baixe o gerenciador 'n' e instale o Node.js LTS:**
   ```bash
   curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o $N_PREFIX/bin/n
   chmod +x $N_PREFIX/bin/n
   n lts
   ```

3. **Persista as configurações no seu shell:**
   ```bash
   echo 'export N_PREFIX=$HOME/.n' >> ~/.bashrc
   echo 'export PATH=$N_PREFIX/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

## Passo 3: Instalando o Gemini CLI

Com o ambiente configurado e o Node.js pronto, a instalação do CLI é direta e segura:

```bash
npm install -g @google/gemini-cli
```

---

## Verificação da Instalação

Após seguir os passos acima, execute os comandos abaixo para garantir que tudo está configurado corretamente:

### 1. Validar a presença no PATH
Este comando deve retornar um caminho dentro de `~/.npm-global` ou `~/.n`.
```bash
which gemini
```

### 2. Verificar a versão e ajuda
```bash
gemini --version
gemini --help
```

---

## "Não funcionou, e agora?" (Troubleshooting)

Se o comando `gemini` não for encontrado:
1. **Recarregue seu shell:** `source ~/.bashrc` (ou `~/.zshrc`).
2. **Verifique as Variáveis:** Rode `env | grep -E "PATH|N_PREFIX"` e veja se os caminhos configurados aparecem lá.
3. **Zsh:** Se você usa Zsh (comum no macOS e versões recentes do Ubuntu), lembre-se de aplicar as mudanças no `~/.zshrc`.

---
*Dica: Após validar a instalação, não esqueça de configurar sua `GOOGLE_API_KEY` para começar a usar!*
