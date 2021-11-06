import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

const ProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle="My Projects">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/projects/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.frontmatter.quickdetail}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx (sort: {fields: frontmatter___date, order: ASC}){
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          quickdetail
        }
        id
        slug
      }
    }
  }
`

export default ProjectsPage