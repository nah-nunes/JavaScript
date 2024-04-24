# Aprendendo API

### API
Uma API, ou Interface de Programação de Aplicações, é como uma ponte que permite que diferentes sistemas e aplicações se comuniquem entre si. Ela define um conjunto de regras e padrões para que uma aplicação possa disponibilizar suas funcionalidades para outras aplicações utilizarem.

- Responsabilidade: Facilita a comunicação entre diferentes serviços ou sistemas.
- Intermediário: Atua como um intermediário na troca de informações entre aplicações.
- Padronização: Estabelece padrões para a integração entre sistemas.

### REST (Transferência de Estado Representativo)
REST é um acrônimo para representational state transfer(transferência de estado representativo), isso é a transferência de dados de de maneira simbólica, figurativa, representativa.

A transferência de dados, geralmente, usando o protocolo HTTP. 

O rest, delimita algumas obrigações nessas transferências de dados.

Resources seria então, uma entidade, um objeto.

### RESTful 
Ser RESTful significa aplicar os princípios e padrões do REST em um sistema ou serviço web.

#### 6 necessidades (constraints) para ser restful

- _Client-server_:  Separação entre cliente e servidor para aumentar a portabilidade e escalabilidade.

- _Stateless_: Cada requisição do cliente deve conter todas as informações necessárias para o servidor processá-la, sem depender de requisições anteriores. Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações. 

- _Cacheable_:  As respostas do servidor devem indicar se podem ser armazenadas em cache pelo cliente.. 

- _Layered System _:  O cliente acessa os recursos sem precisar entender a complexidade do sistema em camadas.

- _Code on demand (optional)_: Permite que o servidor envie código executável para o cliente, como JavaScript, para ser executado.
- _Utilização de Verbos HTTP_: Utilizar os métodos HTTP corretos (GET, POST, PUT, DELETE) para realizar operações nos recursos.

#### Boas práticas
- Utilizar os verbos HTTP corretos para cada tipo de operação.
- Escolher entre plural ou singular para os endpoints de forma consistente.
- Evitar barras no final dos endpoints.
- Sempre fornecer uma resposta ao cliente, mesmo que seja uma resposta vazia.

#### STATUS das respostas 
- 1xx: informação
- 2xx: Sucesso 
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection 
- 4xx: Client Error
  - 400: Bad Request
  - 404: Not Found
- 5xx: Server Error
  500: Internal Server Error
