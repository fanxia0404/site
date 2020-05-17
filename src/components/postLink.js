import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <div>
        <h2>
            <Link className="link-gray-dark" to={post.fields.slug}>
                {post.frontmatter.title}
            </Link>
        </h2>
        <p className="text-gray">{post.fields.date}</p>
        <p>{post.excerpt}</p>
    </div>
)

export default PostLink
