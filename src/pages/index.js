// Step 1: Import React and Link
import * as React from 'react';
import Layout from '../components/my-layout';
import GoalsHtml from '../components/goals';

import SketchSection from '../components/sketching'
import OutlineSection from '../components/outlining'
import ColourSection from '../components/adding-colour'

import bookshelfSketch from "../images/bookshelf-sketch.png"
import bookshelfOutline from "../images/bookshelf-outline.png"
import bookshelfColour from "../images/bookshelf-colour.png"


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="this ePortfolio">

      <section>
      <p>The purpose of my ePortfolio is to make connections between the courses I have taken throughout the MET program in order to ensure and demonstrate my understanding of the concepts that will be valuable for future endeavours. Throughout the development of the ePortfolio I expect to revisit concepts and course work in order to make connections between the work I have completed.</p> 
        
      <p>Another outcome is to demonstrate what I have learned about technology use and adoption, in part through the development of the ePortfolio itself. I would like this ePortfolio to be flexible, and useful beyond the MET program. To ensure this, I will build a dynamic ePortfolio in a way that is sustainable and can act as a professional portfolio of more technical work in the future. To this end, I hope to learn and apply modern web development techniques. </p>
      
      <p>The audience that best aligns with my outcomes and purpose for the ePortfolio are: myself (making connections, ensuring deeper learning, developing an ePortfolio that is flexible and sustainable), and potential future employers.</p>

      <h3>Exploring the ePortfolio</h3>
      <p> This portfolio is designed to showcase learning, reflection, and artifacts that have taken place throughout my MET journey. Each of my goals and artifacts are dynamically tagged with icons to make connections between them. You will see highlighted text which indicates the abilility to hover for more information. Each artifact you will see below is clickable. You can select the image to expand for more detail, or where available you can select the external link icon to view the artifact in a new page.</p>
      </section>
      
      <section>
        <div class="todo-card">
        <h3>WIP</h3>
          <p>You'll notice some incomplete sections so far, but here are my plans:</p>

          <ul>
            <li>1. Add highlighters / more information icons (and reduce text, so the user has the option of what they want to learn more about</li>
            <li>2. Make icons "clickable" - right now many icons are static, but they should actually provide more information when interacted with (see 1.)</li>
            <li>3. Add a vertical navigation. I am experimenting with a single page layout, but it requires better navigation options</li>
          </ul>
        </div>
        </section>
      


      <section> 
        <h1 className="main-heading">My Goals</h1>
        <div className="grid grid-cols-2 gap-3">
        <GoalsHtml></GoalsHtml>
        </div>
      </section>


      <section> 
        <h1 className="main-heading">My MET Journey</h1> 

        <div>
          <p>
          The metaphor that I have chosen is the process of creating a piece of art: from a sketchbook to the final art piece. The metaphor is appropriate for my MET journey as I haven’t felt like it has been a linear path, and I wanted a metaphor that could reflect the iteration and understanding that has occurred through different courses. Important concepts might have started as a doodle or sketch, but through different courses the ideas became more clear. I picked up various “techniques” (technologies, methods of learning) throughout the program that I am now more comfortable using. 
          </p>
          <p>
          <p>The phases of my MET journey include</p>
          <ul class="flex gap-4 space-x-4 p-4...">
            <li class="flex-1 ..." >
              <span class="font-bold ...">Sketch and Doodle: </span> Starts with just getting started - putting pencil to paper and doodling. The doodling can help form more concrete thoughts for sketches that might start to take shape - and leads to a more thoughtful sketch of an idea. Sketching can also be a chance to test out new techniques that have been learned. </li>
            <li class="flex-1 ...">
            <span class="font-bold ...">Outline and Detail: </span> Once an idea has formed and been sketched / changed, it is time to outline the sketch in a more permanent way. </li>
            <li class="flex-1 ...">
            <span class="font-bold ...">Adding Colour: </span>Adding colour, detail, and all of the interesting detail to what used to be just a sketch or a doodle. </li>
            </ul>
        
          
          </p>
        </div>

        <div className="bg-fixed md:bg-fixed bg-cover ..." style={{ backgroundImage: `url(${bookshelfSketch})` }}>
        <SketchSection></SketchSection>
        </div>

        <div className="bg-fixed md:bg-fixed bg-cover ..." style={{ backgroundImage: `url(${bookshelfOutline})` }}>
        <OutlineSection></OutlineSection>
        </div>

        <div className="bg-fixed md:bg-fixed bg-cover ..." style={{ backgroundImage: `url(${bookshelfColour})` }}>
        <ColourSection></ColourSection>
        </div>
      </section>

    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage