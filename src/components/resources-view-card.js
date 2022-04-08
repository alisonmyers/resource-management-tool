import React, { useState, useEffect } from 'react';
import ResourceCards from './resource-cards'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const ResourceSectionCard = () => {
    const data = useStaticQuery(
      graphql`
        query OutlineImages {
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
                cc4
                cc3
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

    const [allDate, setAllData] = useState([]);
    const [filteredData, setFilteredDate] = useState(allData);
    
    const handleSearch = (event) => {

    }

    const resources = data.allDataJson.nodes[0].resources;
    
    return (
      <React.Fragment>

        <ResourceCards resourceData={resources}/>

      </React.Fragment>
 
    )
  }
  
export default ResourceSectionCard