// Step 1: Import React and Link
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial I want an image to appear ....</p>
      <StaticImage
        alt="A picture of Vancouver"
        src="../images/vancouver_city.jpg"
      />

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--course"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Winter 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Course 1</h3>
          <h4 className="vertical-timeline-element-subtitle">name of course</h4>
          <p>
            Description of course
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--course"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Fall 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Course 2</h3>
          <h4 className="vertical-timeline-element-subtitle">name of course 2</h4>
          <p>
            description of course 2
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage