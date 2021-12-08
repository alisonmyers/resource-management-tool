// Step 1: Import React and Link
import * as React from 'react';
import Layout from '../components/my-layout';
import GoalsHtml from '../components/goals';

import { StaticImage } from "gatsby-plugin-image"



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="This ePortfolio">

      
      <section>
      <h2>Who Am I?</h2>

      <p>A data analyst ... </p>

      <p>
      I consider the MET program as a "backwards step" in my career... I started as a data analyst with an interest in designing informational dashboards, with particular interest in Learning Analytics. However, dashboard design can only come after the understanding and collection of data. I soon recognized the need to develop some programming and data skills - and learned R and Python. This allowed me to build better data pipelines, and make more sophisticated transformations in order to improve the dashboards. Once I had a better understanding of data, I then recognized a need to understand the systems that data came from. I realized the benefit of exploring how interaction with systems generated data - both to understand the data, but to also influence how tools are used in order for useful data to be created. Moving backwards another step, while technology creates data, the decisions that lead to technology selection and how it is used. Educational technology selection may come from individual levels (teachers), or institutional levels (administration). At the core, these decisions should be of benefit to the learner and their educational experience. Understanding teaching and learning through the study of learning theories gives important context from both the instructor and learner. 
      </p>


      <StaticImage src="../images/about-career.png" alt="My Career Diagram" />


      </section>
      
    
      <section> 
        <h1 className="main-heading">My Goals</h1>

        <p>
        “Speaking the language” of learning theories is important to be able to communicate with instructors or other curriculum and content designers. Their experiences and decisions toward teaching will influence design and technology decisions. Understanding the learning theories that teachers and/or students ascribe to provides important contextual information for the selection and use of technology.  In turn, these decisions can affect data generated from learning activities, by tools, and how this data can be useful for making decisions in the future.  
        </p>

        <p>The selection of educational technologies, at any scale, require a critical analysis of the user needs in their relevant context. In order to influence the selection of technologies it is important to demonstrate the ability to use and/or create frameworks for such decisions. The selection of technologies should also build upon the educational context, which can be influenced by learning theories.</p>

        <p>Demonstrating the ability to develop content and to build technologies is part of my last two goals. The development of the ePortfolio itself will help to demonstrate these competencies. I would like this ePortfolio to be flexible, and useful beyond the MET program. To ensure this, I have built a dynamic ePortfolio in a way that is sustainable (for me) and can act as a professional portfolio of more technical work in the future.</p>

        <div className="goal-card-grid">        
        <GoalsHtml></GoalsHtml>
        </div>
        
        <h2>Who Are You?</h2>
        <p>A present, past, or future MET student ... a fellow data analyst ... a passer by?</p>

      </section>

    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage