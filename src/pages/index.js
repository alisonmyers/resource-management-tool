// Step 1: Import React and Link
import * as React from 'react'
import Layout from '../components/MyLayout'
import { StaticImage } from 'gatsby-plugin-image'
import CourseTimeLine from '../components/courses.js'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial I want an image to appear ....</p>
      <StaticImage
        alt="A picture of Vancouver"
        src="../images/vancouver_city.jpg"
      />
      <div>
        <h1 className="main-heading">My Courses</h1>
        <CourseTimeLine></CourseTimeLine>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage