// Step 1: Import React and Link
import * as React from 'react';
import Layout from '../components/my-layout';
import GoalsHtml from '../components/goals';

import SketchSection from '../components/sketching'
import OutlineSection from '../components/outlining'
import ColourSection from '../components/adding-colour'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="This Portfolio">

      <div className="main-heading">
        <h3>Hello, and welcome to my ePortfolio! </h3>
      </div>

      <div>
      <p>The purpose of my ePortfolio is to make connections between the courses I have taken throughout the MET program in order to ensure and demonstrate my understanding of the concepts that will be valuable for future endeavours. Throughout the development of the ePortfolio I expect to revisit concepts and course work in order to make connections between the work I have completed.</p> 
        
      <p>Another outcome is to demonstrate what I have learned about technology use and adoption, in part through the development of the ePortfolio itself. I would like this ePortfolio to be flexible, and useful beyond the MET program. To ensure this, I will build a dynamic ePortfolio in a way that is sustainable and can act as a professional portfolio of more technical work in the future. To this end, I hope to learn and apply modern web development techniques. </p>
      
      <p>The audience that best aligns with my outcomes and purpose for the ePortfolio are: myself (making connections, ensuring deeper learning, developing an ePortfolio that is flexible and sustainable), and potential future employers.</p>

      <h3>Exploring the ePortfolio</h3>
      <p> This portfolio is designed to showcase learning, reflection, and artifacts that have taken place throughout my MET journey. Each of my goals and artifacts are dynamically tagged with icons to make connections between them. You will see highlighted text which indicates the abilility to hover for more information. </p>
      </div>
      
      <div class="todo-card">
      <h3>WIP</h3>
        <p>You'll notice some incomplete sections so far, but here are my plans:</p>

        <ul>
          <li>1. Add highlighters / more information icons (and reduce text, so the user has the option of what they want to learn more about</li>
          <li>2. Make icons "clickable" - right now many icons are static, but they should actually provide more information when interacted with (see 1.)</li>
          <li>3. Add a vertical navigation. I am experimenting with a single page layout, but it requires better navigation options</li>
        </ul>
      </div>
    


      <div> 
        <h1 className="main-heading">My Goals</h1>
        <div className="grid grid-cols-2 gap-3">
        <GoalsHtml></GoalsHtml>
        </div>
      </div>


      <div> 
        <h1 className="main-heading">My MET Journey</h1> 
        <SketchSection></SketchSection>
        <OutlineSection></OutlineSection>
        <ColourSection></ColourSection>
      </div>

    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage