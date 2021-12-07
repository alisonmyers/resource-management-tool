// Step 1: Import React and Link
import * as React from 'react';
import Layout from '../components/my-layout';
import GoalsHtml from '../components/goals';

import { StaticImage } from "gatsby-plugin-image"



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
        <h1 className="main-heading">My Goals</h1>

        <p>
        I consider the MET program as a "backwards step" in my career... I started as a data analyst with an interest in designing informational dashboards, with particular interest in Learning Analytics. However, dashboard design can only come after the understanding and collection of data. I soon recognized the need to develop some programming and data skills - and learned R and Python. This allowed me to build better data pipelines, and make more sophisticated transformations in order to improve the dashboards. Once I had a better understanding of data, I then recognized a need to understand the systems that data came from. I realized the benefit of exploring how interaction with systems generated data - both to understand the data, but to also influence how tools are used in order for useful data to be created. Moving backwards another step, while technology creates data, the decisions that lead to technology selection and how it is used. Educational technology selection may come from individual levels (teachers), or institutional levels (administration). At the core, these decisions should be of benefit to the learner and their educational experience. Understanding teaching and learning through the study of learning theories gives important context from both the instructor and learner. 
        </p>


        <StaticImage src="../images/about-career.png" alt="My Career Diagram" />


        <div className="grid grid-cols-4">        
        <GoalsHtml></GoalsHtml>
        </div>

        <p>
        “Speaking the language” of learning theories is important to be able to communicate with instructors or other curriculum and content designers. Their experiences and decisions toward teaching will influence design and technology decisions. Understanding the learning theories that teachers and/or students ascribe to provides important contextual information for the selection and use of technology.  In turn, these decisions can affect data generated from learning activities, by tools, and how this data can be useful for making decisions in the future.  
        </p>
        <p>The selection of educational technologies, at any scale, require a critical analysis of the needs and context. In order to influence the selection of technologies it is important to demonstrate the ability to use and/or create frameworks for such decisions. The selection of technologies should also build upon the educational context, which can be influenced by learning theories.</p>
        <p>Demomnstrating the ability to create content and/or technologies is ...</p>
      </section>

    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage