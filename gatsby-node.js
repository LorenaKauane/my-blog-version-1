const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const locales = require("./src/constants/locales")

let todosPosts = []
let postsEn = []
let postPtBr = []

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: `/${value.slice(20)}`,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

      if (page.path === "/") {
        const postsPerPage = 6
        const array = lang === "en" ? postsEn : postPtBr
        const numPages = Math.ceil(array.length / postsPerPage)

        return Array.from({ length: numPages }).forEach((_, index) => {
          const { node } = array[index]
          const locale = node.frontmatter.locale

          createPage({
            ...page,
            path:
              index === 0
                ? `${localizedPath}`
                : `${localizedPath}page/${index + 1}`,
            context: {
              limit: postsPerPage,
              skip: index * postsPerPage,
              numPages,
              currentPage: index + 1,
              locale: lang,
            },
          })
        })
      }

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          limit: 6,
          skip: 0,
        },
      })
    })
    resolve()
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___data, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              templateKey
              data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              tag
              titulo
              locale
            }
            timeToRead
          }
          next {
            frontmatter {
              titulo
              locale
              templateKey
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              titulo
              locale
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMarkdownRemark.edges

    todosPosts = posts

    const defaultLangPosts = posts.filter(
      ({ node }) =>
        node.frontmatter.locale === "en" &&
        node.frontmatter.templateKey === "blog-post"
    )

    postsEn = defaultLangPosts

    _.each(defaultLangPosts, (post, index) => {
      const previous =
        index === defaultLangPosts.length - 1
          ? null
          : defaultLangPosts[index + 1].node
      const next = index === 0 ? null : defaultLangPosts[index - 1].node

      const locale = post.node.frontmatter.locale
      createPage({
        path: post.node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: post.node.fields.slug,
          previousPost: next,
          nextPost: previous,
          locale: locale,
        },
      })

      const otherLangPosts = posts.filter(
        ({ node }) =>
          node.frontmatter.locale !== "en" &&
          node.frontmatter.templateKey === "blog-post"
      )

      postPtBr = otherLangPosts

      _.each(otherLangPosts, (post, index) => {
        const previous1 =
          index === otherLangPosts.length - 1
            ? null
            : otherLangPosts[index + 1].node
        const next1 = index === 0 ? null : otherLangPosts[index - 1].node

        createPage({
          path: post.node.fields.slug,
          component: path.resolve("./src/templates/blog-post.js"),
          context: {
            slug: post.node.fields.slug,
            previousPost: next1,
            nextPost: previous1,
            locale: "pt",
          },
        })
      })
    })
  })
}
