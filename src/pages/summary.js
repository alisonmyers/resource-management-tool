import * as React from 'react'
import { graphql } from 'gatsby'
import PostLayout from '../components/post-layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// imports

const SummaryPage = ({ data }) => {
    return (
      <PostLayout pageTitle="Building a Usable Resource Management Tool">
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <MDXRenderer>
              {node.body}
            </MDXRenderer>
            </article>
          ))
        }
      </PostLayout>
    )
  }
  
  export const query = graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
          }
          id
          body
        }
      }
    }
  `
  
  export default SummaryPage

