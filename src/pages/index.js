// Step 1: Import React and Link
import * as React from 'react';
import Layout from '../components/my-layout';
import GoalsHtml from '../components/goals';

import { StaticImage } from "gatsby-plugin-image"


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="This ePortfolio">

      <section id="home.welcome">
              
        <p>Welcome! You may be a present, past, or future MET student ... a fellow data analyst ... a passer by? This website has been designed to reflect upon my experience and to showcase artifacts developed throughout the University of British Columbia's Masters of Educational Technology ('the MET') program. On this home page you will discover some of my design decisions, as well as more about me and my goals for this portfolio.Below, you can watch my Video Tour to understand an overview of the website. In the <a href="https://alisonmyers.gatsbyjs.io/sketchbook">Sketchbook</a> you will find a showcase of projects that I have developed throughout my coursework. In the <a href="https://alisonmyers.gatsbyjs.io/blog">Blog</a> you will find reflections on the building of this ePortfolio, as well as my future directions. Finally, any <a href="https://alisonmyers.gatsbyjs.io/feedback">feedback</a> is welcome.</p>

        <h2>Video Tour</h2>
        <iframe width="600" height="400" src="https://www.youtube.com/embed/PUcIGSYCIXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
      
      <section id="home.background">
      <h2>My MET Beginnings</h2>

      <p>Why a Masters of Educational Technology? The MET program was an opportunity to engage with the education of educational technology, after spending the past five years in the field on the technology side. My current role is embedded within a technology support unit in a higher education faculty.</p>

      <p>I began my career as a data analyst with an interest in designing informational dashboards, with specific interests in Learning Analytics. However, dashboard design can only come after the understanding and collection of data. I soon recognized the need to develop some programming and data skills. This allowed me to build better data pipelines, and make more sophisticated transformations in order to improve the dashboards. Once I had a better understanding of data, I then realized the benefits of understanding the systems that data came from. I realized the benefit of exploring how interaction with systems generated data - both to understand the data, but to also influence how tools are used in order for useful data to be created. While technology creates data, the decisions that lead to technology selection and how it is used ultimately influence the data that is generated and how that data can be used. Educational technology selection may come from individual (teachers), or institutional levels (administration), among other levels. At the institution level, I gained a perspective of culture and infrastructure that influence technology use and selection. At the individual level I was introduced to pedagogy, learning theories, and instructor comfort with technology. Through engagement with my classmates, many of whom are educated and experienced in education, I also gained valuable perspective of how individuals make technology decisions in their classrooms.</p>
      

      <StaticImage src="../images/about-career-2.png" alt="My Career Diagram" className="object-center" />

      </section>

      <section id="home.goals"> 
        <h1 className="main-heading">My Goals</h1>

        <p>My experience prior to and during the MET program has allowed me to articulate the following goals:</p>

        <div className="goal-card-grid">        
        <GoalsHtml></GoalsHtml>
        </div>

      </section>




      <section id="home.goals.expanded">
        <blockquote><ul class='my-style'>

        
      <li>“Speaking the language” of educators is important to be able to communicate with instructors or other curriculum and content designers and experts. Their experiences and decisions toward teaching will influence design and technology decisions. Understanding the pedagogy and learning theories that teachers ascribe to provides important contextual information for the selection and use of technology. In turn, these decisions can affect data generated from learning activities, by tools, and how this data can be useful for making decisions in the future.  
        </li>

        <li>The selection of educational technologies, at any scale, require a critical analysis of the user needs in their relevant context. In order to influence the selection of technologies it is important to demonstrate the ability to use and/or create frameworks for such decisions. The selection of technologies should also build upon the educational context, which can be influenced by learning theories.</li>

        <li>Demonstrating the ability to develop content and to build technologies is part of my last two goals. The development of the ePortfolio itself will help to demonstrate these competencies. I would like this ePortfolio to be flexible, and useful beyond the MET program. To ensure this, I have built a dynamic ePortfolio in a way that is sustainable (for me) and can act as a professional portfolio of more technical work in the future.</li>

        </ul></blockquote>


      </section>
      
    
      

    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage