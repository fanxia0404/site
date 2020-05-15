import React from "react"
import PostLink from "../components/postLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <div className="my-6 p-3" style={{ borderLeft: "4px solid #24292e"}}>
        <PostLink key={edge.node.id} post={edge.node} />
      </div>
    ))

  return (
    <Layout>
      <SEO title="posts" />
      <div className="d-flex flex-column">
        <ul>
          {Posts}
        </ul>
      </div>
    </Layout>
  )
}

export default PostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`