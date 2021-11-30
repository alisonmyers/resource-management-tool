import * as React from 'react'
import Projects from './project-cards'
import { useStaticQuery, graphql } from "gatsby"

const ColourSection = () => {
    const data = useStaticQuery(
      graphql`
        query MoreImages {
          allDataJson(filter: {title: {eq: "My Projects"}}) {
            nodes {
              title
              colour {
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

    const projects = data.allDataJson.nodes[0].colour;
    
    return (
      <React.Fragment>

      <h2>Adding Colour</h2>

        <p>Adding colour to an outlined sketch can be scary - there's no more erasing, and going back is going to take more time. However, at this stage in an art project, you should have experimented with techniques and tools, and have an idea of where you want the piece to end up.</p>

        <Projects projectData={projects}/>
        
      </React.Fragment>
    )
  }
  
export default ColourSection