import React from "react"
import { graphql } from "gatsby"

import "../pages/styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function PostTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { html, excerpt, fields, frontmatter } = markdownRemark
    return (
        <Layout>
            <SEO title={frontmatter.title} description={excerpt} />
            <div className="py-6 px-4 px-md-6">
                <h1>{frontmatter.title}</h1>
                <p className="mb-6">{fields.date}</p>
                <article
                    className="markdown-body"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
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
`
