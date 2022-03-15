import * as React from 'react'
import ResourceList from './resource-lists'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


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

      <div className="grid grid-cols-2">

        <div>
            <StaticImage src="../images/search.png" alt="SearchBar"/>
         </div>

         <div>
            <StaticImage src="../images/sort_by.png" alt="SortBy"/>
         </div>

      </div>
      

      <div className="bg-white py-4">
        <h2>ETEC 511</h2>
      </div>

        <ResourceList projectData={projects}/>

      </React.Fragment>
 
    )
  }
  
export default ResourceSectionList