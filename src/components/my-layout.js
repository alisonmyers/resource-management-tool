import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import NavBar from "./nav.js"
import ScrollToTop from './scroll-top'
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (

    
    
    <React.Fragment>
            

      <div className ="global-header">   
        <div className="global-header-div">    
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      
        <h2 className="site-title">{data.site.siteMetadata.title}</h2>
        <h3 className="site-description">{data.site.siteMetadata.description}</h3>
       
        </div>
      </div>
      
      <div>
        <main className ="global-wrapper">
          
          <h1 className="main-heading">{pageTitle}</h1>

         
          <div className="grid grid-cols-2">

            <div>
                <StaticImage src="../images/search.png" alt="SearchBar"/>
            </div>

            <div>
                <StaticImage src="../images/sort_by.png" alt="SortBy"/>
            </div>

            <div>
              <h2>View as:</h2>
              <span><NavBar></NavBar></span>
            </div>
  

        </div>
          <div className="bg-white py-2">
                <h2>ETEC 511</h2>
          </div>
          {children}
        </main>

      </div>




      
      {ScrollToTop()}
      

    </React.Fragment>

    
  )

    
}

export default Layout