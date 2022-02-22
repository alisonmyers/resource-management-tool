import * as React from 'react'
import Layout from '../components/my-layout'

import ResourceSection from '../components/resources'


const IndexPage = () => {

    return(
        <Layout pageTitle="Resources">
        <section> 

        <div className="bg-fixed md:bg-fixed bg-contain ...">
        <ResourceSection></ResourceSection>
        </div>

      </section>
      </Layout>
    )
  
}

export default IndexPage