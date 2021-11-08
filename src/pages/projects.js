import * as React from 'react'
import Layout from '../components/my-layout'
import { Link, graphql } from 'gatsby'

import { FaMicroscope } from "@react-icons/all-files/fa/FaMicroscope";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { ImBubbles2 } from "@react-icons/all-files/im/ImBubbles2";
import { BiCool } from "@react-icons/all-files/bi/BiCool";

const goals = {
    1: ImBubbles2,
    2: FaMicroscope,
    3: AiFillCheckCircle,
    4: BiCool,
}

const GoalIcon = ({iconName}) => {
    const Icon = goals[iconName];
    return <Icon />
  }

const ProjectsPage = ({ data }) => {

  const projects = data.allMdx.nodes
  return (
    <Layout pageTitle="My Projects">
      {
        projects.map(project => (
          <div class="project-post-card"> 
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

                <p> {project.excerpt} </p>
                <span>Goals: </span>
                <ul class="icons">
                {project.frontmatter.goals.map((goal, i) =>
                  <li key={i}><GoalIcon iconName={goal} size={10}/></li>
                
                )}
                </ul>
                
              </section> 
            
          </article>
          </div>
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
          goals
        }
        id
        slug
        excerpt(pruneLength: 200)
      }
    }
  }
`

export default ProjectsPage