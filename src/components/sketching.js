import * as React from 'react'
import Projects from './project-cards'
import { useStaticQuery, graphql } from "gatsby"


const SketchSection = () => {

  const data = useStaticQuery(
    graphql`
      query SketchProjects {
        allDataJson(filter: {title: {eq: "My Projects"}}) {
          nodes {
            title
            sketch {
              id
              title
              category
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

  const projects = data.allDataJson.nodes[0].sketch;

  return ( 
    <React.Fragment>

      <div className>       
        <div className="bg-white py-8">

        <h2 className="bg-white py-8">Sketches and Doodles</h2>

        <blockquote>
        <p>Just get started - put pencil to paper and doodle. The doodling can help form more concrete thoughts for sketches that might start to take shape - and leads to a more thoughtful sketch of an idea. Sketching can also be a chance to test out new techniques that have been learned.</p>
        </blockquote>


        <p>I began the MET program with a loose idea of what I wanted to learn, and what there was to learn about educational technology. While my technology skills are strong, I knew that I needed some foundational knowledge about education and learning. The selected artifacts that represent my "sketchy(ing)" and "doodling" phase were either projects where I was introduced to a technology for the first time (i.e. VR), or was gaining some knowledge that I knew I was lacking.</p>


        </div>

      <div>
        <Projects projectData={projects}/>
      </div>

      </div>
     
     
      
    </React.Fragment>
  )
}

export default SketchSection