# API - Grupos de Maracatu pelo Brasil

O projeto surge com a necessidade de exaltar a cultura de herança africana que é o Maracatu. Um ritmo popular brasileiro que surgiu em Recife - PE, e que nasceu da junção de elementos da cultura africana, indígena e portuguesa.

![Fork](assets/mrt.jpg)

---------------------------------------------------------

### 📝 Objetivo:

Levar ao conhecimento do público em geral o nome de alguns grupos de Maracatu que existem no Brasil, como forma de despertar interesse para essa cultura tão rica.

---------------------------------------------------------
### Dados para collection gruposdemaracatu

- id: autogerado e obrigatório
- nome: texto e obrigatório
- regiao: texto e obrigatório
- anoFundacao: data e não obrigatório
- descricao: texto e não obrigatório

---------------------------------------------------------
### Essa API tem as seguintes rotas:

- [x]  **"/"** Retorna index com apresentação
{
   titulo: "API de pesquisa de Grupos de Maracatus no Brasil",
   version: "1.0.0"
}  
- [x]  **"/grupos/"** Retorna todos os grupos do banco de dados
- [x]  **"/adicionar"** Cria novo grupo e retorna mensagem de sucesso com grupo criado
- [x]  **"/apagar/[ID]"** Deleta grupo por id específico e retorna mensagem de que foi apagado
- [x]  **"/alterar/[ID]"** Atualiza grupo por id específico e retorna mensagem de sucesso com grupo atualizado

---------------------------------------------------------
### API deve retornar seguinte JSON:

```jsx
[
     {
            "_id": "5fd4185d04a9fb002420058d",
            "nome": "Maracatu Alfaias da Praia",
            "regiao": "Nordeste",
            "anoFundacao": "2016-01-01T00:00:00.000Z",
            "descricao": "Grupo criado em 2004 com o intuito de promover cultura raiz na localidade ( Porto de Galinhas). Hoje ministramos oficinas sem local definido, multiplicando a cultura pernambucana em todos os meios possíveis.",
            "__v": 0
    }
]
```
---------------------------------------------------------
### Arquitetura MVC

```bash
\--📂 maracatus
		 |   .gitignore
         |   .env
		 |   package-lock.json
		 |   package.json
	     |   server.js
			\--📂 node_modules
            \--📂 assets
			\--📂src
			    |   app.js
			    |
			    📂---controller
			    |       grupoController.js
			    |
			    📂---model
			    |       grupoSchema.js
				|       grupoRepository.js
			    |
			    📂---routes
			            grupoRoutes.js
```

---------------------------------------------------------
### Tecnologias utilizadas

- Javascript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Heroku

---------------------------------------------------------
### Link do Deploy

  ``` bash
    https://maracatus.herokuapp.com/
  ```
