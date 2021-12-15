// Step 1: Import React and Link
import * as React from 'react';
import Layout from '../components/my-layout';
import GoalsHtml from '../components/goals';

import { StaticImage } from "gatsby-plugin-image"


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="My Portfolio">

      <section id="home.welcome">
              
        <p>Welcome! You may be a present, past, or future MET student ... a fellow data analyst ... a passer by? This website has been designed to reflect upon my experience and to showcase projects developed throughout the University of British Columbia's Masters of Educational Technology ('the MET') program. On this home page you will discover some of my design decisions, as well as more about me and my goals for this portfolio. Below, you can watch my Video Tour to understand an overview of the website. In the <a href="https://alisonmyers.gatsbyjs.io/sketchbook">Sketchbook</a> you will find a showcase of projects that I have developed throughout my coursework. In the <a href="https://alisonmyers.gatsbyjs.io/blog">Blog</a> you will find reflections on the building of this ePortfolio, as well as my future directions. Finally, any <a href="https://alisonmyers.gatsbyjs.io/feedback">feedback</a> is welcome.</p>

        <h2>Video Tour</h2>
        
        <iframe className="center-this" width="600" height="400" src="https://www.youtube.com/embed/PUcIGSYCIXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 

        </section>
      
      <section id="home.background">
      <h2>Me & the MET</h2>

      <p>Why a Masters of Educational Technology? The MET program was an opportunity to engage with the education of educational technology, after spending the past five years in the field on the technology side.</p>
      
      <h3>About Me</h3>
    
          <div style={{ minWidth: 300, maxWidth: 750, float: "right"}}>
          <StaticImage src="../images/about-career-2.png" alt="My Career Diagram"/>
          </div>
        
          <p>Context is important, so let me begin with some context about myself. I began my career as a data analyst with an interest in designing informational dashboards, with specific interests in Learning Analytics. However, dashboard design can only come after the understanding and collection of data. I soon recognized the need to develop some programming and data skills. This allowed me to build better data pipelines, and make more sophisticated transformations in order to improve the dashboards. Once I had a better understanding of data, I then realized the benefits of understanding the systems that data came from. I realized the benefit of exploring how interaction with systems generated data - both to understand the data, but to also influence how tools are used in order for useful data to be created. This brings me to my experience in the MET program...</p>
  

      
      <h3>... & The MET</h3>
        <p>While technology creates data, the decisions that lead to technology selection and how it is used ultimately influence the data that is generated and how that data can be used. Educational technology selection may come from individual (teachers), or institutional levels (administration), among other levels. At the institution level, I gained a perspective of culture and infrastructure which influence technology use and selection. At the individual level I was introduced to pedagogy, learning theories, and instructor comfort with technology. Through engagement with my classmates, many of whom are educated and experienced in education, I also gained valuable perspective of how individuals make technology decisions in their classrooms.</p>
      </section>

      <section id="home.goals"> 
        <h1 className="main-heading">My Goals</h1>

        <p>My experience prior to and during the MET program has allowed me to articulate the following goals:</p>

        <div className="goal-card-grid">        
        <GoalsHtml></GoalsHtml>
        </div>

      </section>

    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage