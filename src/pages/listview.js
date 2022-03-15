import * as React from 'react'
import Layout from '../components/my-layout'
import ResourceSectionList from '../components/resources-view-list'


const ListPage = () => {

    return(
        <Layout pageTitle="Resources">
        <section> 

        <div className="bg-fixed md:bg-fixed bg-contain ...">
        <ResourceSectionList></ResourceSectionList>
        </div>

      </section>
      </Layout>
    )
  
}

export default ListPage