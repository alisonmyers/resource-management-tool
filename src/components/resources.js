import * as React from 'react'
import Resources from './resource-cards'
import { useStaticQuery, graphql } from "gatsby"

const ResourceSection = () => {
    const data = useStaticQuery(
      graphql`
        query MyQuery {
          allGoogleResourcesSheet {
            nodes {
                id
                title
                author
                course
                resourceTypes
                description
                links
                tags
                readBy
                iframe
                altResource
                apaReference
                image
                }
              }
            }

      `
    );

    console.log("data:")
    
    const projects = data.allGoogleResourcesSheet.nodes;
    
    console.log(projects)

    return (
      <React.Fragment>

      <div className="bg-white py-2">
        <h2>ETEC 511</h2>
      </div>

        <Resources projectData={projects}/>

      </React.Fragment>
 
    )
  }
  
export default ResourceSection