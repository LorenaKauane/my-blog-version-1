---
templateKey: blog-post
locale: en
title: what do you need to know before create a new project in front-end
titulo: What do you need to know before create a new project in front-end
data: 2021-09-28T09:55:01.000Z
image: assets/img/AntesCriarProjectFront.png
destaque: false
tag: ReactJs
---

Today I will talk about what do you need to know before create a new project in front-end, with that do you will learn a creation a scalable software, a healthy software long way, create process with easy steps.

I'm sharing knowledge on YouTube, but unfortunately content in Portuguese, but I'm transcribing it to English like this post, in case you wanted to see the video: 
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/vZASLXluAOU' frameborder='0' allowfullscreen></iframe></div>


![https://media.giphy.com/media/13Nc3xlO1kGg3S/giphy.gif?cid=790b76118d13be12b5f092ecdef5874b1f61d1079af41e53&rid=giphy.gif&ct=g](https://media.giphy.com/media/13Nc3xlO1kGg3S/giphy.gif?cid=790b76118d13be12b5f092ecdef5874b1f61d1079af41e53&rid=giphy.gif&ct=g)

In the past, some companies never thought about  that, especially in front-end, that's why there is so much legacy and poorly architected software. 

### What is design/project software?

Process of designing the elements of a system, architecture, modules, flows, how the software works, the objective in here is to work with data and information about your system and to allow the implementation consistency architectural entities as defined in system architecture models and views.

### First step

The first step, do you need to understand the problem.

- How many users?
- What are these users like? (age, how they work) if your company has a UI/UX it will probably bring this information
- Do you need to support mobile devices?
- Support offline?
- Internationalization?
- Accessibility?
- Differences Browser?
- List what not to do
- What is the flows to data (API)? List of the all APIs, where the user will click and  what will happens?
- Is SEO a concern? Yes (SSR) or is Single Page Application (SPA) good enough?

After answering all the questions, you will already have a clear idea of how the system will work, the type of user and how the user will use the system. This is very important, ok?

### System elements

- **Architecture**

Define structure, the behavior, we can use flowcharts to represent and illustrate the architecture, like: [drwa.io](http://drwa.io/),  [whimsical](https://whimsical.com/), [Lucidchart](https://www.lucidchart.com/pages/pt)
- **Modules**

It is components that handle a specific task in a system. The combination with modules build the system. So for example, module that almost all systems exist today that are clients, sales, probably in the system you use there are thousands of modules.
- **Components**

It is a specific function or group of related functions.
- **Data**

Flows the information and data  and its management.
    

### Product Assumptions

- Suppose how many interactions occur in one day, will it have a very large volume of data?
- What is the average response of the API?

### Speed / Performance

In your front-end project, you also need to think about the bottleneck of your application, you want a system with smoothness and speed, right? (everyone wants it hehehe)

If you're going to think about smoothness, let's think about:

- Back snapshot (page stack / API cache)
- Instant advance
- Animation or transition?

How can we further simplify the user's life? Because the user likes automatic things, saving a data in the database and being redirected to the list screen, instead of saving it after clicking the back button, simple things that make a total difference in the usability of your software.

Now speaking of speed, some points can be considered as:

- preload / presearch,
- Code splitting or skeleton loading, depending on where your user is a certain part of the system is not loaded, or is loaded as he uses the system
- Cache / CDN for static resources
- Service worker (offline) for caching
- Infinite scroll, have you ever thought about how it's done on facebook?
- SSR / initial data feed (improves first significant access)

### Images

But we can't forget about a very important item in the front-end world, which are images!

Front-end images impact speed directly so it is very important to think about them and what method will be used on your system.

The most famous methods are: 

- Compress, compress the image
- Lazy Load translating on tiptoe is lazy loading and a way for you to delay loading, so your page content will load first and then load the image in sequence.
- Progressive images when the image is blurry
- Use SVG for icons which is faster
- Caching / HTTP2 (Browser cache, CDN cache)

Now going to the data and the API:

- You can use conventional model today which is REST
- WebSockets for chats
- GraphQL provides a complete and understandable description of the data in its API, gives customers the power to ask for exactly what they need

### Future

Last but not least, the FUTURE and ALL

- Improvement ideas
- Things that can improve, why program and so, you code today and in a few months you already think about the refactor

It is important to mention that to create a new project you need to get your hands dirty, do a lot of studies, understand the system in general, you need a lot of focus and dedication like everything else in life. I believe I managed to talk a good part of today's subject, I hope you enjoyed today's content!

Thanks! To the next.

![https://media.giphy.com/media/1ccd9l2mnpOQz96MZM/giphy.gif?cid=790b7611d4735075cf4e1a6895216ec88faac5562efa2ce9&rid=giphy.gif&ct=g](https://media.giphy.com/media/1ccd9l2mnpOQz96MZM/giphy.gif?cid=790b7611d4735075cf4e1a6895216ec88faac5562efa2ce9&rid=giphy.gif&ct=g)