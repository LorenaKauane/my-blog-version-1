---
templateKey: blog-post
locale: pt
pageKey: page_blogpost
title: Como configurar dominio no netlify e godaddy
titulo: Como configurar domínio no netlify e godaddy
data: 2020-05-28 04:01:52
image: assets/img/dominiologo.png
destaque: false
tag: assuntos aleatórios
---

Para hospedar esse blog, tive muita dificuldade de configurar DNS e meu domínio, pois, não tinha conhecimento nenhum a respeito.

Mas primeiro vamos entender o que e o [netlify](https://www.netlify.com/)

> Netlify é uma empresa de computação em nuvem sediada em São Francisco que oferece serviços de hospedagem e back-end sem servidor para aplicativos da Web e sites estáticos. [Fonte](https://en.wikipedia.org/wiki/Netlify)

Com ele e possível subir suas aplicações front-end sem pagar 1 centavo, sensacional né?

![Friends gif](https://media.giphy.com/media/jtirFYtVwG5a0o1t9o/giphy.gif)

### Domínios personalizados

Por padrão qualquer site do netlify pode ser acessado com o `subdominio.netlify.app`. Como por exemplo, [esse site](https://lorenakauane.netlify.app/) que hospedei para conhecer melhor a plataforma e ele faz referência e esse [post ](https://www.instagram.com/p/B7t24c-AIyK/)que fiz no instagram.

Mas quando queremos algo mais personalizado precisamos ter um domínio. Na documentação do netilify tem várias definições sobre o subdomínio e zona dns, [clique aqui para ser redirecionado para lá](https://docs.netlify.com/domains-https/custom-domains/#definitions).

### Mas vamos lá configurar!

Primeiro você precisa ter um domínio próprio dito, no meu caso utilizo o [godaddy](https://br.godaddy.com/).

Supondo que seu site já esteja hospedado e com o `domain.netlify.app`, vamos pegar a url do seu site e descobrir o IP nesse site [clicando aqui!](https://www.meuenderecoip.com/descobrir-ip-do-site.php)

Com Ip descoberto vamos para godaddy!

No item do menu **meus produtos** você vai ver a listagem de todos seus domínios:

![dominios go dady](assets/img/meusprodutos.png)

Clique em DNS, e sua visão vai ser +- essa:

![alteracao img](assets/img/alteração.png)

Como descrito na imagem você deve colocar o IP e o domínio do seu site, apenas clicando no lápis a direita Feito isso. Vamos voltar para o netlify e ir para seu site e configurar domínio.

Clique no seu site > Domain settings

![domains site](assets/img/domains.png)

Vá em adicionar domínio customizado > verificar o domínio

![verifica dominio](assets/img/confirmdomain.png)

Por fim... Só confirmar e aproveitar !!

![feliz](https://media.giphy.com/media/cklPOHnHepdwBLRnQp/giphy.gif)

Por hoje e só pessoal,

Até mais,
