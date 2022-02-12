import * as React from 'react'
import Layout from '../components/my-layout'

import OutlineSection from '../components/outlining'
import bookshelfOutline from "../images/bookshelf-outline.png"


const ArtifactsPage = () => {

    return(
        <Layout pageTitle="Resources">
        <section> 

        <div className="bg-fixed md:bg-fixed bg-contain ..." style={{ backgroundImage: `url(${bookshelfOutline})` }}>
        <OutlineSection></OutlineSection>
        </div>

      </section>
      </Layout>
    )
  
}

export default ArtifactsPage