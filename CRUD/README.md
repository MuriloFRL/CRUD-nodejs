Projeto acadêmico Node-JS

Autor: Murilo Arvoredo Souto.

Técnologias utilizadas:

Express
KnexJS
Sequelize
PostgreSQL

Na pasta raiz do projeto se encontra a collection do POSTMAN,
com ela é possivel verificar a funcionalidade do projeto.

Para subir o servidor basta executar o arquivo "server.js"
que se encontra na pasta: CRUD/src.

URI: HTTP://localhost:3333/usuarios

Métodos GET/POST/PUT/DELETE

POST deve ser feito em formato JSON.
ex: {   "nome": "Luíz", "endereco:"Rua XXX"  }

PUT/DELETE requer parâmetros de requisição onde o usuario deve inserir o ID do BD após a rota usuarios.

ex: [DELETE] HTTP://localhost:3333/usuarios/1