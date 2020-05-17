import React from "react"
import { graphql } from "gatsby"
import "./styles.scss"

import PostLink from "../components/postLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .filter(edge => !!edge.node.fields.date) // You can filter your posts based on some criteria
        .map(edge => (
            <div
                key={edge.node.id}
                className="mb-6 px-3"
                style={{ borderLeft: "4px solid #24292e" }}
            >
                <PostLink post={edge.node} />
            </div>
        ))

    return (
        <Layout>
            <SEO title="Posts" />
            <div className="py-6 px-4 px-md-6">{Posts}</div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }) {
            edges {
                node {
                    id
                    excerpt
                    fields {
                        slug
                        date(formatString: "MMMM DD, YYYY")
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`
