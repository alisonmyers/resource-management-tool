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
    
    const handleSearch = (event, type) => {
      let value = event.target.value.toLowerCase();
      let result = [];
      console.log(value);

      if (type=="title") {
        result = resources.filter((data) => {
          return data.title.toLowerCase().search(value) != -1;
          })

      } else if (type =="author") {

        result = resources.filter((data) => {

          if (data.author) {
            return data.author.toLowerCase().search(value) != -1;
          }

          })
      } else if (type =="tags") {

        result = resources.filter((data) => {

          if (data.tags) {
            return data.tags.toString().toLowerCase().search(value) != -1;
          }

          })
      }
      
;

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

        <h3>Search:</h3>

        <div class="grid grid-flow-col auto-cols-max gap-4">
          <div class="pt-2">


            <input class="border-3 border-gray bg-white h-10 px-5 pr-16 rounded-lg text-lg focus:outline-none" placeholder="Search titles" type="text" onChange={(event) =>handleSearch(event, "title")} />

            </div>

            <div class="pt-2">


            <input class="border-3 border-gray bg-white h-10 px-5 pr-16 rounded-lg text-lg focus:outline-none" placeholder="Search authors" type="text" onChange={(event) =>handleSearch(event, "author")} />

            </div>

            <div class="pt-2">
            <input class="border-3 border-gray bg-white h-10 px-5 pr-16 rounded-lg text-lg focus:outline-none" placeholder="Search tags" type="text" onChange={(event) =>handleSearch(event, "tags")} />

            </div>

        </div>


        <ResourceCards resourceData={filteredData}/>

      </React.Fragment>
 
    )
  }
  
export default ResourceSectionCard