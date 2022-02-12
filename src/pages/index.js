// Step 1: Import React and Link
import * as React from 'react';
import Layout from '../components/my-layout';


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="My Portfolio">

      <section id="home.welcome">
              
        <p>Welcome! </p>

        <h2>Video Tour</h2>
        
        <iframe className="center-this" width="600" height="400" src="https://www.youtube.com/embed/PUcIGSYCIXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 

        </section>

    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage