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

## Verificação da Instalação

Após seguir um dos métodos acima, execute os comandos abaixo para garantir que tudo está configurado corretamente:

### 1. Validar a presença no PATH
Este comando deve retornar o caminho onde o `gemini` foi instalado. Se não retornar nada, o seu `PATH` ainda não reconhece o diretório.
```bash
which gemini
```

### 2. Verificar a versão
Confirma se o binário está respondendo e qual versão foi instalada:
```bash
gemini --version
```

### 3. Testar o comando de ajuda
Valida se todas as dependências do CLI foram instaladas corretamente:
```bash
gemini --help
```

### 4. Testar Diagnóstico e Comandos Internos
O Gemini CLI utiliza comandos iniciados com `/` dentro da sessão interativa para tarefas administrativas. Para ver informações detalhadas sobre sua instalação e ambiente, entre no Gemini e use o comando `/about`:
```bash
gemini
# Uma vez dentro da sessão:
/about
```
Para sair da sessão, use `/exit` ou pressione `Ctrl+D`.

---

## "Não funcionou, e agora?" (Troubleshooting)

Se o comando `gemini` não for encontrado:
1. **Recarregue seu shell:** `source ~/.bashrc` (ou `~/.zshrc`).
2. **Verifique o Prefix:** No caso da Opção 2, rode `npm config get prefix` e veja se ele aponta para o local correto.
3. **Node.js:** Verifique se sua versão do Node é superior à 18: `node -v`.

---
*Dica: Após validar a instalação, não esqueça de configurar sua `GOOGLE_API_KEY` para começar a usar!*
