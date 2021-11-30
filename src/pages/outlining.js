import * as React from 'react'
import Layout from '../components/my-layout'
import Projects from '../components/project-cards'
import { useStaticQuery, graphql } from "gatsby"

const OutlinePage = () => {
    const data = useStaticQuery(
      graphql`
        query OutlineImages {
          allDataJson(filter: {title: {eq: "My Projects"}}) {
            nodes {
              title
              outline {
                id
                title
                course
                date
                goals
                description
                connections
                goals_text
                reflection
                links
                image {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder:BLURRED
                    )
                  }
                }
              }
            }
          }
        }

      `
    );

    const projects = data.allDataJson.nodes[0].outline;
    
    return (
      <Layout pageTitle="Outlining">

        <p>In my "outlining" phase, I began to understand what areas really interested me, and could start applying some of the concepts I was learning. I was adding some permanence to the sketches and doodles that I started with. I had a better understanding of my own style, and some practice under my belt creating sketches that I would want to turn into something more.</p>

        <Projects projectData={projects}/>
        
      </Layout>
    )
  }
  
export default OutlinePage