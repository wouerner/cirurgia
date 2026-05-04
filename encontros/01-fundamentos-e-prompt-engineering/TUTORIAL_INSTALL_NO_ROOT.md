# Guia de Instalação Sem Root (Linux/macOS)

Neste guia, veremos como preparar seu ambiente e instalar o `@google/gemini-cli` de forma profissional, usando o gerenciador **n** para evitar a necessidade de `sudo`.

## Passo 1: Instalando o Node.js (via n)

O **n** é um gerenciador de versões leve que permite instalar o Node.js e pacotes globais diretamente na sua pasta de usuário.

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
   Adicione as variáveis ao seu arquivo de configuração (`~/.bashrc` ou `~/.zshrc`) para que o ambiente seja carregado automaticamente:
   ```bash
   echo 'export N_PREFIX=$HOME/.n' >> ~/.bashrc
   echo 'export PATH=$N_PREFIX/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

## Passo 2: Instalando o Gemini CLI

Com o Node.js instalado via **n**, o `npm` já está configurado para instalar pacotes globais sem precisar de root:

```bash
npm install -g @google/gemini-cli
```

---

## Verificação da Instalação

Após seguir os passos acima, execute os comandos abaixo para garantir que tudo está configurado corretamente:

### 1. Validar a presença no PATH
Este comando deve retornar um caminho dentro de `~/.n/bin`.
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
2. **Verifique as Variáveis:** Rode `env | grep -E "PATH|N_PREFIX"` e veja se o caminho `~/.n/bin` aparece no início do seu PATH.
3. **Remova conflitos:** Se você tinha o **NVM** instalado anteriormente, certifique-se de remover ou comentar as linhas referentes a ele no seu `~/.bashrc` ou `~/.zshrc` para evitar conflitos de versão.

---
*Dica: Após validar a instalação, não esqueça de configurar sua `GOOGLE_API_KEY` para começar a usar!*

---
*Dica: Após validar a instalação, não esqueça de configurar sua `GOOGLE_API_KEY` para começar a usar!*
