const axios = require('axios');

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