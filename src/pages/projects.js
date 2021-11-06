import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

const ProjectsPage = ({ data }) => {

  const posts = data.allMdx.nodes
  return (
    <Layout pageTitle="My Projects">
      {
        posts.map(post => (
          <article 
            className="post-list-item"
            key={post.id}>
              <header>
                <h2>
                <Link to={`/projects/${post.slug}`} itemProp="url">
                  <span itemProp="headline">{post.frontmatter.title}</span>
                </Link>
              </h2>
                <small>{post.frontmatter.date}</small>
              </header> 
              <section>
                <p> {post.frontmatter.quickdetail} </p>
              </section> 
            
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