import * as React from 'react'
import Projects from './resource-cards'
import { useStaticQuery, graphql } from "gatsby"

const ResourceSection = () => {
    const data = useStaticQuery(
      graphql`
        query OutlineImages {
          allDataJson(filter: {title: {eq: "Resource List"}}) {
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

    const projects = data.allDataJson.nodes[0].outline;
    
    return (
      <React.Fragment>

      <div className="bg-white py-8">

        <h2>ETEC 511</h2>

      </div>

        <Projects projectData={projects}/>

      </React.Fragment>
 
    )
  }
  
export default ResourceSection