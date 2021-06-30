exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(`
      {
        allSanityPage {
            nodes {
              title
              slug {
                _key
                current
              }
            }
          }
      }
    `)
  
    if (result.errors) {
      throw result.errors
    }
  
    const pages = result.data.allSanityPage.edges || []
    pages.forEach((edge, index) => {
      const path = `/${edge.node.slug.current}`
  
      createPage({
        path,
        component: require.resolve("./src/templates/project.js"),
        context: { slug: edge.node.slug.current },
      })
    })
  }