
# Tela de Cadastro — pequeno clone de feed (estudo)

Projeto simples criado com Create React App e um mock API (json-server) para treinar telas de cadastro/login, feed e ranking. É uma versão didática para estudo e prototipagem local.

Principais ideias:
- Formulário de cadastro com validação (react-hook-form) e verificação de email duplicado no mock API.
- Login que persiste sessão em localStorage e redireciona para a tela de feed.
- Mock API com `json-server` (arquivo `db.json`) para armazenar usuários.

Stack
- React (Create React App)
- react-hook-form (validação)
- styled-components (estilos)
- json-server (mock API)
- axios (requisições HTTP)

Como rodar (local)
1. Instale dependências:

```powershell
npm install
```

2. Inicie o ambiente de desenvolvimento (front + mock API) em um comando:

```powershell
npm run dev
```

Esse script usa `concurrently` + `cross-env` e iniciará:
- frontend: http://localhost:3001
- mock API (json-server): http://localhost:8001

Observação sobre porta 3000
- Durante o desenvolvimento, se a porta 3000 já estiver em uso, o `dev` foi configurado para forçar o frontend em `PORT=3001` automaticamente. Se preferir usar 3000, finalize o processo que está ouvindo nela (ex.: no PowerShell):

```powershell
# encontre o PID (exemplo)
netstat -ano | findstr :3000

# mate o processo com o PID retornado
Stop-Process -Id <PID> -Force
# ou (Windows)
taskkill /PID <PID> /F
```

Scripts úteis
- `npm run dev` — roda frontend + json-server em paralelo (recomendado para desenvolvimento).
- `npm run api` — roda apenas o json-server (porta 8001).
- `npm start` — roda somente o frontend (por padrão CRA, porta 3000 se livre).
- `npm run build` — cria build de produção.

Endpoints (mock API)
- Usuários: GET/POST em `http://localhost:8001/users` (json-server).

Estrutura relevante
- `src/pages/login` — tela de login
- `src/pages/register` — tela de cadastro
- `src/pages/feed` — feed (usuario home)
- `src/components/Card` — cartão de post
- `db.json` — banco de dados do json-server

Uso rápido
- Crie uma conta em `/register` → ao criar, você é redirecionado ao `/feed`.
- Faça logout pelo botão no header (isso limpa o usuário do localStorage).

Próximos passos sugeridos
- Proteger rotas com um Guard/Context de autenticação (ex.: React Context + PrivateRoute).
- Substituir alert(...) por toasts/notifications.
- Melhorar testes e adicionar CI.

Licença
- Projeto de estudo — sem licença específica.

Se quiser, eu adapto este README para inglês, adiciono badges ou incluo um guia de deploy.
