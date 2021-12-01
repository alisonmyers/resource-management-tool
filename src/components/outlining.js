import * as React from 'react'
import Projects from './project-cards'
import { useStaticQuery, graphql } from "gatsby"

const OutlineSection = () => {
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
      <React.Fragment>

      <div className="bg-white">


        <h2 className="bg-white">Outline and Detail</h2>

        <p className="bg-white">In my "outlining" phase, I began to understand what areas really interested me, and could start applying some of the concepts I was learning. I was adding some permanence to the sketches and doodles that I started with. I had a better understanding of my own style, and some practice under my belt creating sketches that I would want to turn into something more.</p>
      </div>

        <Projects projectData={projects}/>
      
      </React.Fragment>
 
    )
  }
  
export default OutlineSection