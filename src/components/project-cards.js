import React, { Component } from "react";
import ProjectDetailsModal from "./project-detail-modal";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FaMicroscope } from "@react-icons/all-files/fa/FaMicroscope";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { ImBubbles2 } from "@react-icons/all-files/im/ImBubbles2";
import { BiCool } from "@react-icons/all-files/bi/BiCool";
import { FiExternalLink } from  "@react-icons/all-files/fi/FiExternalLink";

const goals = {
    1: ImBubbles2,
    2: FaMicroscope,
    3: AiFillCheckCircle,
    4: BiCool,
}

const goals_desc = {
  1: "To understand, critically examine, and 'speak the language' of higher education, including learning theories, in order to communicate effectively with educators, instructional designers, and institutional administrators.",
  2: "To be able to evaluate/analyze the adoption of educational technologies from the context of multiple stakeholders (individual, course, and/or institution). In addition, to effectively communicate the evaluation/analysis to the given stakeholder.",
  3: "To demonstrate competency in the development of materials and use of varied technologies that could be adopted in a classroom or by an institution.",
  4: "My final goal is to build a dynamic portfolio. I want the technology to help me do the job of 'making connections', by building a tool that literally does so in its design.",
}

const GoalIcon = ({iconName}) => {
    const Icon = goals[iconName];
    const Title = goals_desc[iconName]
    return <Icon title={Title}/>
  }
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    
    if (this.props.projectData) {
 

      var projects = this.props.projectData.map(function (projects) {

        if (projects.tags) {
          var tags = projects.tags

          var taglist = projects.tags.map((tag, i) => {
            return (
              <li key={i}>
                  <p className="tag-border">
                        {tag}
                    </p>
              </li>
            );
          });
          console.log(taglist)
        }

       
        return (
          <React.Fragment>
              <div className="col-sm-12 col-md-6 col-lg-4">

                <div className="project-post-container" key={projects.id} >
                  <div className="project-post-header cursor-pointer" onClick={() => detailsModalShow(projects)}>
                      <p className="text-center font-semibold">{projects.title}</p>
                  </div>
                  <div className="project-post-image" onClick={() => detailsModalShow(projects)}>
                    <GatsbyImage alt="" image={getImage(projects.image)}/>
                  </div>
                  <div className="project-post-goals">
                    <ul class="icons">
                    {projects.goals.map((goal, i) =>
                      <li className="icons" key={i}><GoalIcon iconName={goal} size={10}/></li>
                    
                    )}
                    </ul>

                  </div>
                  <div className="project-post-links">
                  <ul class="links">
                    {projects.links.map((link, i) =>
                      <li key={i}><a href={link} target="_blank" ><FiExternalLink/></a></li>
                    )}
                    </ul>
                    
                    </div>

                  <div className="project-post-tags">
                    <ul className="tags">
                      {taglist}
                    </ul>
                  </div>
                </div>
              </div>

          </React.Fragment>


        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}


export default Projects;
