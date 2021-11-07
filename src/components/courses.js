import React from "react"
import CourseData from "../data/MyCourses.json"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiGraduateCap } from "@react-icons/all-files/gi/GiGraduateCap";

const CourseTimeLine = () => (
      <VerticalTimeline>

      {CourseData.courses.map((data, i) => {

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element-date"
            date={data.date}
            iconStyle={{
              background: "#C4CED9",
              color: "black",
              textAlign: "center",
            }}
            contentStyle={{ background: '#C4CED9', color: '#737373' }}
            contentArrowStyle={{ borderRight: '7px solid  #C4CED9' }}
            icon={<GiGraduateCap />}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px"}}>
              <a href ={data.course_link} target="_blank" rel="noopener noreferrer">{data.course_code}</a>
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
  )


export default CourseTimeLine