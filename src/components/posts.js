import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
import PostLayout from "./post-layout"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <PostLayout pageTitle={mdx.frontmatter.title}>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </PostLayout>
  )
}

export const pageQuery = graphql`
  query BlogprojectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
