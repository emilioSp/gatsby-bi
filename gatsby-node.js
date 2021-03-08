const path = require('path');
const axios = require('axios');

exports.createPages = async ({ actions: { createPage, createRedirect }, graphql }) => {
  createRedirect({
    fromPath: '/pippo/',
    toPath: '/dipartimento/',
    statusCode: 301,
  });

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(__dirname, 'src/templates/PostTemplate.js'),
    });
  });
};

const getTodos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  return response.data;
};

exports.onCreatePage = async ({ page, actions }) => {
  if (page.path === '/dipartimento' || page.path === '/dipartimento/') {
    const { createPage, deletePage } = actions;
    deletePage(page);

    const todos = await getTodos();

    createPage({
      ...page,
      context: {
        ...page.context,
        todos,
      },
    });
  }
};
