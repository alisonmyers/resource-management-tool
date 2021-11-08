import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
    <div className="global-wrapper">

      
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header className = "global-header">
          <h2 className="site-title">{data.site.siteMetadata.title}</h2>
          <h3 className="site-description">{data.site.siteMetadata.description}</h3>
        
      
        <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              <p class="hover:text-white">Home</p>
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              <p class="hover:text-white">About</p>
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/projects" className="nav-link-text">
            <p class="hover:text-white">Projects</p>
            </Link>
          </li>
        </ul>
      </nav>

      </header>
      
      
      <main>
        <h1 className="main-heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout