---
templateKey: blog-post
locale: pt
title: o que voce precisa saber antes de criar seu projeto no front-end
titulo: O que você precisa saber antes de criar seu projeto no front-end
data: 2021-09-28T09:55:01.000Z
image: assets/img/AntesCriarProjectFront.png
destaque: false
tag: ReactJs
---


Hoje eu vou te falar o que você precisa saber para criar seu projeto no front-end, com isso você vai aprender a criar sistemas mais escaláveis, criar um software saudável a longo prazo, padronizar processos com alguns passos fáceis. 

Caso você goste de consumir conteúdo em vídeo, se inscreva no canal que falo exatamente sobre isso: 
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/vZASLXluAOU' frameborder='0' allowfullscreen></iframe></div>


![https://media.giphy.com/media/13Nc3xlO1kGg3S/giphy.gif?cid=790b76118d13be12b5f092ecdef5874b1f61d1079af41e53&rid=giphy.gif&ct=g](https://media.giphy.com/media/13Nc3xlO1kGg3S/giphy.gif?cid=790b76118d13be12b5f092ecdef5874b1f61d1079af41e53&rid=giphy.gif&ct=g)

Antigamente, algumas empresas nem pensava nisso, principalmente no front-end, por isso que existem tantos softwares legados e mal arquitetados.

## O que é design/projetar um sistema?

Processo de projetar os elementos de um sistema, arquitetura, módulos, fluxos, como o sistema vai ser executado, o principal objetivo é fornecer dados e informações detalhadas suficientes sobre o sistema e seus elementos de sistema para permitir a implementação consistente com entidades arquitetônicas conforme definido em modelos e visualizações da arquitetura do sistema.

## Primeiro passo ?

Em primeiro lugar, precisamos entender o problema.

- Quantos usuários?
- Como são esses usuários? (idade, como que eles trabalham), se na sua empresa tiver um ui/ux ele provavelmente vai te trazer esses dados prontos
- Precisamos oferecer suporte a dispositivos móveis?
- Suporte offline?
- Internacionalização?
- Acessibilidade?
- Alvos do navegador?
- Listar o que não deve fazer
- Qual é o fluxo de dados (API) / fluxo do usuário, onde o usuário clicará e o que acontecerá.
- SEO é uma preocupação? Sim (SSR) ou então Single Page Application (SPA) é bom o suficiente?

Depois de respondido todas as perguntas, você já vai ter clareza de como o sistema vai funcionar, o tipo de usuário e como o usuário vai utilizar o sistema. Isso e muito importante ok?

## Elementos do sistema

- **Arquitetura**:

Definir a estrutura, o comportamento, podemos usar fluxogramas para representar e ilustrar a arquitetura. Use e abuse de softwares como [drwa.io](http://drwa.io/), [whimsical](https://whimsical.com/), [Lucidchart](https://www.lucidchart.com/pages/pt).

- **Módulos**:

São componentes que tratam de uma tarefa específica em um sistema. Uma combinação dos módulos constitui o sistema. Então, por exemplo, módulo que quase todos os sistemas hoje existem que são de clients, sales, provavelmente no sistema que você utiliza tem milhares de módulos.

- **Componentes**:

Função específica ou grupo de funções relacionadas.

- **Interfaces**:

É o limite compartilhado através do qual os componentes de um sistema trocam informações e se relacionam.
- **Dados**:

Fluxo de informações e dados e o seu gerenciamento.

## Suposições sobre o produto

- Suponha quantas interações ocorrem em um dia, vai ter um volume de dados muito grande?
- Qual a resposta media da api?

## Velocidade / desempenho

No seu projeto do front-end e necessário pensar também no gargalo da sua aplicação, você quer um sistema com suavidade e velocidade certo? (todo mundo deseja isso hehehe)

Se for pensar em suavidade, vamos pensar em:

- Voltar instantâneo (pilha de páginas / cache de API)
- Avance instantâneo
- Animação ou transição?

Como a gente pode ainda mais simplificar a vida do usuário? Por que o usuário gosta de coisas automáticas, salvar um dado no banco de dados e ser redirecionado para a tela de listagem, em vez dele salvar depois de salvo clicar no botão voltar, coisas simples que fazem total diferença na usabilidade do seu software.

Agora falando em velocidade alguns pontos podem ser considerados como:

- Pré-carga / pré-busca,
- Divisão de código ou carregamento de esqueleto, dependendo da onde o seu usuário está uma certa parte do sistema não é carregado, ou e carregado conforme ele utiliza o sistema
- Cache / CDN para recursos estáticos
- Trabalhador de serviço (offline) para armazenamento em cache
- Rolagem infinita, já pensou como e feito no facebook?
- SSR / feed de dados iniciais (melhora o primeiro acesso significativa)

### Imagens

Mas a gente também não pode esquecer de um item muito importante no mundo front-end que são as imagens!

Imagens no front-end impacta na velocidade diretamente então e muito importante pensar nelas e qual método vai ser utilizado no seu sistema.

Os métodos mais famosos são

- Compress, comprime a imagem
- Lazy Load traduzindo a pontapé é carregamento preguiçoso e uma forma de você adiar o carregamento, então o conteúdo da sua pagina vai carregar primeiro e logo em sequência carrega a imagem
- Progressive images quando a imagem fica com blurry
- Usar SVG para icons que e mais rápido
- Caching / HTTP2 (Browser cache, CDN cache)

Agora partindo para os dados e a API:

- Você pode utilizar modelo convencia hoje que e o REST
- WebSockets para chats
- GraphQL fornece uma descrição completa e compreensível dos dados em sua API, dá aos clientes o poder de pedir exatamente o que precisam

### Futuro

Por fim não menos importante e o FUTURO e os TODOS

- Ideias de melhorias
- Coisas que podem melhorar, por que programar e assim, você coda hoje e daqui a alguns meses você já pensa no refactor

E importante mencionar que para criar um projeto novo você precisar colocar a mão na massa, fazer muitos estudos, entender o sistema de forma geral, precisa de muito foco e dedicação como tudo na vida. Acredito que consegui falar boa parte do assunto de hoje, espero que você tenha gostado do conteúdo de hoje!

Obrigada! Até a próxima. 

![https://media.giphy.com/media/1ccd9l2mnpOQz96MZM/giphy.gif?cid=790b7611d4735075cf4e1a6895216ec88faac5562efa2ce9&rid=giphy.gif&ct=g](https://media.giphy.com/media/1ccd9l2mnpOQz96MZM/giphy.gif?cid=790b7611d4735075cf4e1a6895216ec88faac5562efa2ce9&rid=giphy.gif&ct=g)
