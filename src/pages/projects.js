import * as React from 'react'
import Layout from '../components/MyLayout'
import { Link, graphql } from 'gatsby'

const ProjectsPage = ({ data }) => {

  const projects = data.allMdx.nodes
  return (
    <Layout pageTitle="My Projects">
      {
        projects.map(project => (
          <article 
            className="project-list-item"
            key={project.id}>
              <header>
                <h2>
                <Link to={`/projects/${project.slug}`} itemProp="url">
                  <span itemProp="headline">{project.frontmatter.title}</span>
                </Link>
              </h2>
                <small>{project.frontmatter.date}</small>
              </header> 
              <section>
                <p> {project.frontmatter.quickdetail} </p>
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