# Leads2Marvel

## Bibliotecas
Além das bibliotecas padrões do Vue e Vue CLI, foram utilizadas Axios, para comunicação com a API, postCSS + tailwind, por requisição do projeto e icones da lib MDI. Também foi utilizado a dependência MD5, para criar a hash passada como parâmetro para a API da Marvel

## Localmente
Instalar as dependências: `npm i`
Rodar a aplicação: `npm run serve`

## Deploy
Foi feito um deploy desta aplicação no Heroku. https://leads2marvel.herokuapp.com/

## Falhas na entrega
 * Não foi feito a utilização do Docker para deploy devido a minha má conexão com a internet. De qualquer forma, devo dizer que meus conhecimentos relacionados a DevOps são razos.
 * Não foram criados testes.
 * Existem componentes que poderiam ser melhorados, como a lista de heróis. 
 * A possibilidade de selecionar seu personagem favorito na listagem principal.
 * Adicionar mais filtros, além do nome, já que API permite outros além do que foi implementado.
 * Melhorar alguns alinhamentos, como no carregando.
 * Apllicar o Toaster para caso haja falha no carregamento das listas. Foi aplicado apenas no login. Sua aplicação é simples, quando tivermos algum erro, no `catch`, basta adicionar o tipo de mensagem. Isso pode ser visto no `store` da aplicação.

## Comentários
Foi utilizado, para o login, o serviço https://reqres.in
Utilizem as seguintes credenciais:
  * usuário: eve.holt@reqres.in
  * senha: cityslicka

As informações contidas na aplicação são de autoria da Marvel. Este é apenas um teste de avaliação.
