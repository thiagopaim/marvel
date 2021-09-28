# Leads2Marvel

## Bibliotecas
Além das bibliotecas padrões do Vue e Vue CLI, foram utilizadas Axios, para comunicação com a API, postCSS + tailwind, por requisição do projeto e icones da lib MDI. Também foi utilizado a dependência MD5, para criar a hash passada como parâmetro para a API da Marvel

## Build
Para rodar a aplicação localmente é necessário ter o NodeJS na versão v14.17.5. A instalação das dependências da-se pelo comando `npm i`.
Existe a opção do Docker, mas minha internet estava muito lenta e não consegui testar.

Foi feito um deploy desta aplicação no Heroku. https://leads2marvel.herokuapp.com/

## Falhas na entrega
Não foi feito a utilização do Docker para deploy devido a minha má conexão com a internet. De qualquer forma, devo dizer que meus conhecimentos relacionados a DevOps são razos.

Não foram criados testes unitários.

## Comentários
Para o login, foi utilizado o serviço https://reqres.in
Para acessar a área administrativa:
  * usuário: eve.holt@reqres.in
  * senha: cityslicka

Não gostei muito de misturar BEM com o Tailwind, então utilizei eles em componentes separados.

As informações contidas na aplicação são de autoria da Marvel. Este é apenas um teste de avaliação.
