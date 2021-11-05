import React from "react"
import JSONData from "../data/MyCourses.json"
import Layout from '../components/layout'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const CourseTimeLine = () => (


    <Layout pageTitle="My Course Timeline">
      <VerticalTimeline>

      {JSONData.courses.map((data, i) => {

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element-date"
            date={data.date}
            iconStyle={{
              background: "grey",
              color: "#fff",
              textAlign: "center",
            }}
            contentStyle={{ background: 'grey', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  grey' }}
            icon={<i className="fab fa-angular experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              <a href={data.course_link}>{data.course_code}</a>
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {data.course_title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              <p></p> 
              
            </h4>

          </VerticalTimelineElement>

        )
      }
      )}
      </VerticalTimeline>

    </Layout>
  )


export default CourseTimeLine