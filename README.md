# Deskflow | MMI + PSB

O **Deskflow** é um aplicativo web de uso interno criado para centralizar e facilitar a **consulta de procedimentos operacionais** adotados pela equipe de Tecnologia e Suporte. Com uma interface moderna, responsiva e intuitiva, ele oferece acesso rápido a fluxos documentados de atendimento e atividades recorrentes.

## 🎯 Objetivo

Fornecer um ponto único de referência para **procedimentos internos**, garantindo agilidade, padronização e acessibilidade para toda a equipe de atendimento técnico, administrativa e de suporte.

## 🧭 Funcionalidades

### 🔐 Gerador de Senhas
Acesso a uma ferramenta integrada que gera senhas fortes de forma prática e segura.

### ✅ Software Homologados
Atalho com link externo para consulta da lista de softwares aprovados pela equipe de TI.

### 👥 Gestão de Usuários
Instruções detalhadas sobre como:
- Criar usuários próprios e terceiros
- Alterar dados de usuários
- Realizar reativações de contas
- Resetar senhas no Active Directory

### 🔁 Sistemas Internos
Passo a passo de processos relacionados a ferramentas da empresa:
- **Navision**: consulta ao fluxo de aprovação
- **Log One e E4R**: procedimentos de reset de senha

### 🌐 VPN
Guia de resolução de problemas comuns ao tentar conectar-se via VPN.

### 🖨️ Impressoras
Instruções para solicitar ou recuperar o **PIN de impressão** dos usuários.

### 💻 Aquisição de Equipamentos
Formulário e orientações sobre compra e solicitação de novos dispositivos de TI.

## 🎨 Interface

- Layout responsivo com menu lateral em estilo acordeão
- Ícones limpos e modernos com **Phosphor Icons**
- Conteúdo carregado dinamicamente via `iframe`, sem recarregamento de página
- Gravação da última página acessada com `localStorage` para continuidade de navegação

## 🚀 Tecnologias Utilizadas

- **HTML5**, **CSS3** e **JavaScript**
- **Phosphor Icons**
- Armazenamento local (`localStorage`)
- Design responsivo com media queries

## 🛠️ Estrutura de Arquivos

📦 deskflow/ 
┣ 📁 componentes/ 
┃ ┗ 📁 geradordesenha/ 
┣ 📁 processos/ 
┣ 📜 index.html 
┣ 📜 style.css 
┣ 📜 script.js


## 💡 Possíveis Melhorias Futuras

- Barra de pesquisa global de processos
- Toasts de feedback visual (ex: "procedimento carregado")
- Autenticação por token para acesso restrito
- Exportação de procedimentos em PDF
- Dashboards e KPIs de uso

## 📄 Licença

Este projeto é de uso interno da organização e não está licenciado para redistribuição externa.

---

Desenvolvido com 💜 por NetoNog.
