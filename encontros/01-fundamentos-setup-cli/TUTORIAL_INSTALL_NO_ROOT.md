# Guia de Instalação Sem Root (Linux/macOS)

Neste guia, veremos como instalar o `@google/gemini-cli` sem a necessidade de usar `sudo`.

## Opção 1: Usando NVM (Recomendado)

O **NVM (Node Version Manager)** permite gerenciar múltiplas versões do Node.js em seu diretório de usuário, instalando pacotes globais sem precisar de root.

1. **Instale o NVM:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

2. **Carregue o NVM (ou reinicie seu terminal):**
   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

3. **Instale uma versão do Node.js:**
   ```bash
   nvm install --lts
   ```

4. **Instale o Gemini CLI:**
   ```bash
   npm install -g @google/gemini-cli
   ```

## Opção 2: Configurando um Prefix Global Local

Se você já tem o Node.js e não quer usar NVM, pode configurar o `npm` para instalar pacotes globais em sua pasta `home`.

1. **Crie um diretório para instalações globais:**
   ```bash
   mkdir ~/.npm-global
   ```

2. **Configure o npm para usar o novo caminho:**
   ```bash
   npm config set prefix '~/.npm-global'
   ```

3. **Adicione o caminho ao seu `.bashrc` ou `.zshrc`:**
   ```bash
   echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

4. **Instale o Gemini CLI:**
   ```bash
   npm install -g @google/gemini-cli
   ```

## Verificação

Após a instalação por qualquer um dos métodos, verifique se o comando está disponível:

```bash
gemini --version
```

---
*Dica: Lembre-se de configurar sua `GOOGLE_API_KEY` após a instalação.*
