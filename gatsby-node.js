/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        // Auto populate date field from file name
        createNodeField({
            node,
            name: `date`,
            value: getNode(node.parent).name.substring(0, 10),
        })

        // Auto populate slug
        const relativePath = createFilePath({ node, getNode, basePath: `posts` })
        createNodeField({
            node,
            name: `slug`,
            value: `/posts${relativePath}`,
        })
    }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = require.resolve(`./src/templates/postTemplate.js`)

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [fields___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                            date
                        }
                    }
                }
            }
        }
    `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
                // additional data can be passed via context
                slug: node.fields.slug,
                date: node.fields.date,
            },
        })
    })
}
