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

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    
    const handleSearch = (event) => {
      let value = event.target.value.toLowerCase();
      let result = [];
      console.log(value);
      
      result = resources.filter((data) => {
      return data.title.toLowerCase().search(value) != -1;
      });

      console.log(result)
      
      setFilteredData(result);
    }
      

    const resources = data.allDataJson.nodes[0].resources;

    useEffect(() => {
      console.log(resources)
      setAllData(resources)
      setFilteredData(resources)
    }, []);


    
    return (
      <React.Fragment>

        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />

        <ResourceCards resourceData={filteredData}/>

      </React.Fragment>
 
    )
  }
  
export default ResourceSectionCard