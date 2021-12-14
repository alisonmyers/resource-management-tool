import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import NavBar from "./nav.js"
import ScrollToTop from './scroll-top'

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
        <NavBar></NavBar>
      </div>
      
      <div>
        <main className ="global-wrapper">
          <h1 className="main-heading">{pageTitle}</h1>
          {children}
        </main>
      </div>

      
      {ScrollToTop()}
      

    </React.Fragment>

    
  )
}

export default Layout