import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  topBanner,
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  description,
} from './layout.module.css'

const Layout = ({ pageTitle, siteDescription, children }) => {
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
    <div className={container}>

      <div className={topBanner}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header>
          <h2 className={siteTitle}>{data.site.siteMetadata.title}</h2>
          <h3 className={description}>{data.site.siteMetadata.description}</h3>
        </header>
      
        <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/projects" className={navLinkText}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      </div>
      
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout