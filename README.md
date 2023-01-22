# Happy Salt 🏋🏿‍♀️

> “**A cura para qualquer coisa é água salgada: Lágrimas, suor ou o mar. “ Isak Dinesen**
> 

Happy Salt é um projeto independente em Javascript que consiste em uma API conectada à um banco de dados que simula um sistema utilizado por academias e espaços fitness, voltada para os funcionários.

 O foco deste projeto foi gerar uma média de presença dos atletas de acordo com o dia da semana e os horários do dia, para que os atletas saibam o que esperar do movimento, bem como tomar decisões melhor informadas do momento mais adequado para realizarem seus treinos, como na imagem:

![gym-times.png](Happy%20Salt%20%F0%9F%8F%8B%F0%9F%8F%BF%E2%80%8D%E2%99%80%EF%B8%8F%208bdda956fcfc481484adcd56302e9b26/gym-times.png)

---

### Funcionalidades

- Cadastro e manipulação de atletas:

|  | Rota | Funcionalidade |
| --- | --- | --- |
| GET | /searchClients | acessa um atleta pelo seu nome |
| POST | /register | cadastra um atleta |
| DELETE | /remove | remove um atleta do sistema |
| PUT | /upate/:id | atualiza as informações de um atleta |

### Arquitetura

- A organização do sistema segue a arquitetura MVC (Model, View, Controller):

```
\--📂 happySalt
|
|    .env.example
|    .gitignore
|    package-lock.json
|    package.json
|    ~~Procfile~~
|    [README.md]
|    server.js
|
\--📂src
     |
     |   app.js
     |
     📂---controllers
     |
     |   clientsController.js
     |
     📂---database
     |
     |   mongoDBConfig.js
     |
     📂---models
     |
     |   clientsSchema.js
     |
     |-----📂routes
     |
     |   clientsRoutes.js
```

- Escopo das pastas:
    - [.env.example](https://github.com/camilamata/cycleTraining/blob/main/.env.example) mostra como ficam as variáveis no arquivo .env
    - [.gitignore](https://github.com/camilamata/cycleTraining/blob/main/.gitignore) descreve quais arquivos devem ser ignorados ao commitar o repositório
    - [package-lock.json](https://github.com/camilamata/cycleTraining/blob/main/package-lock.json) mostra as dependências do projeto e suas respectivas versões
    - [Procfile](https://github.com/camilamata/cycleTraining/blob/main/Procfile) configura o deploy no Heroku
    - [server.js](https://github.com/camilamata/cycleTraining/blob/main/server.js) configura o servidor
