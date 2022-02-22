import * as React from 'react'
import Layout from '../components/my-layout'

import OutlineSection from '../components/resources'


const IndexPage = () => {

    return(
        <Layout pageTitle="Resources">
        <section> 

        <div className="bg-fixed md:bg-fixed bg-contain ...">
        <OutlineSection></OutlineSection>
        </div>

      </section>
      </Layout>
    )
  
}

export default IndexPage