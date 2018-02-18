const path = require(`path`)
const slugify = require(`slugify`)
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      query ProductBuildQuery {
        allContentfulProduct {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }
      result.data.allContentfulProduct.edges.map(({ node }) => {
        let slug = slugify(node.title)
        createPage({
          path: '/gallery/' + slug,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            title: node.title
          }
        })
      })
      resolve()
    })
  })
}

