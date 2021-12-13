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
                tags
                group
                iframe
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

    <div className="bg-white py-8">


      <h2>Adding Colour</h2>

        <blockquote>
        <p>
        Adding colour, detail, and all of the interesting detail to what used to be just a sketch or a doodle. At this stage in an art project, you should have experimented with techniques and tools, and have an idea of where you want the piece to end up.</p>
        </blockquote>

    </div>
        <Projects projectData={projects}/>
        
      </React.Fragment>
    )
  }
  
export default ColourSection