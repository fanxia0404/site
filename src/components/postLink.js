import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <div>
        <Link className="f2 link-gray-dark" to={post.fields.slug}>
            {post.frontmatter.title} ({post.fields.date})
        </Link>
    </div>
)

export default PostLink
