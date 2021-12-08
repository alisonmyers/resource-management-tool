import * as React from 'react'
import Layout from '../components/my-layout'

import SketchSection from '../components/sketching'
import OutlineSection from '../components/outlining'
import ColourSection from '../components/adding-colour'

import bookshelfSketch from "../images/bookshelf-sketch.png"
import bookshelfOutline from "../images/bookshelf-outline.png"
import bookshelfColour from "../images/bookshelf-colour.png"


const ArtifactsPage = () => {

    return(
        <Layout pageTitle="My Sketchbook">
        <section> 

        <div>
          <p>
          The metaphor that I have chosen is the process of creating a piece of art: from a sketchbook to the final art piece. The metaphor is appropriate for my MET journey as I haven’t felt like it has been a linear path, and I wanted a metaphor that could reflect the iteration and understanding that has occurred through different courses. Important concepts might have started as a doodle or sketch, but through different courses the ideas became more clear. I picked up various “techniques” (technologies, methods of learning) throughout the program that I am now more comfortable using. 
          </p>

          <h2>Exploring the Projects</h2>
          <p> This portfolio is designed to showcase learning, reflection, and artifacts that have taken place throughout my MET journey. Each of my goals and artifacts are dynamically tagged with icons to make connections between them. You will see highlighted text which indicates the abilility to hover for more information. Each artifact you will see is "clickable". You can select the image to expand for more detail, or where available you can select the external link icon to view the artifact in more detail.</p>

        
        </div>


        

        <div className="bg-fixed md:bg-fixed bg-contain ..." style={{ backgroundImage: `url(${bookshelfSketch})` }}>
        <SketchSection></SketchSection>
        </div>

        <div className="bg-fixed md:bg-fixed bg-contain ..." style={{ backgroundImage: `url(${bookshelfOutline})` }}>
        <OutlineSection></OutlineSection>
        </div>

        <div className="bg-fixed md:bg-fixed bg-contain ..." style={{ backgroundImage: `url(${bookshelfColour})` }}>
        <ColourSection></ColourSection>
        </div>
      </section>
      </Layout>
    )
  
}

export default ArtifactsPage