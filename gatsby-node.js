const axios = require('axios');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./templates/PostTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}


const getTodos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  const data = response.data;
  return data;
}

exports.onCreatePage = async ({ page, actions }) => {
  if (page.path === '/dipartimento' || page.path === '/dipartimento/') {
    const { createPage, deletePage } = actions
    deletePage(page)

    const todos = await getTodos();

    createPage({
      ...page,
      context: {
        ...page.context,
        todos,
      },
    })
  }
}