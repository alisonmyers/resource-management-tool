import * as React from 'react'
import Layout from '../components/my-layout'

import ResourceSectionCard from '../components/resources-view-card'


const IndexPage = () => {

    return(
        <Layout pageTitle="Resources">
        <section> 


        <div className="bg-fixed md:bg-fixed bg-contain ...">
        <ResourceSectionCard></ResourceSectionCard>
        </div>

      </section>
      </Layout>
    )
  
}

export default IndexPage