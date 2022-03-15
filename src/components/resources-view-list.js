import * as React from 'react'
import ResourceList from './resource-lists'
import { useStaticQuery, graphql } from "gatsby"



const ResourceSectionList= () => {
    const data = useStaticQuery(
      graphql`
        query OutlineImagesTwo {
          allDataJson(filter: {title: {eq: "Resource List"}}) {
            nodes {
              title
              resources {
                id
                title
                author
                course
                resourcetypes
                description
                links
                tags
                readby
                iframe
                alt_resource
                apa_reference
                image {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder:BLURRED 
                      height: 150
                    )
                  }
                }
              }
            }
          }
        }

      `
    );

    const projects = data.allDataJson.nodes[0].resources;
    
    return (
      <React.Fragment>

        <ResourceList projectData={projects}/>

      </React.Fragment>
 
    )
  }
  
export default ResourceSectionList