import React, { Component } from "react";
import ProjectDetailsModal from "./resource-detail-modal";
import CC from "./cc"

import { FaBook } from "@react-icons/all-files/fa/FaBook";
import { RiArticleLine } from "@react-icons/all-files/ri/RiArticleLine";
import { RiComputerLine } from "@react-icons/all-files/ri/RiComputerLine";
import { BsFillBookmarksFill } from "@react-icons/all-files/bs/BsFillBookmarksFill";
import { FaVideo } from "@react-icons/all-files/fa/FaVideo";



const resourcetypes = {
    1: FaBook,
    2: RiArticleLine,
    3: RiComputerLine,
    4: BsFillBookmarksFill,
    5: FaVideo,
    6: FaBook
}

const resourcetypes_desc = {
  1: "This is an ebook_general",
  2: "This is an electronic_article",
  3: "This is a web_general",
  4: "This is an ebook_chapter",
  5: "this is a video",
  6: "this is a book_general"
}

const ResourceIcon = ({iconName}) => {
    const Icon = resourcetypes[iconName];
    const Title = resourcetypes_desc[iconName]
    return <Icon title={Title}/>
  }
class ResourceLists extends Component {
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
    
    if (this.props.resourceData) {
 

      var resources = this.props.resourceData.map(function (resources) {

        if (resources.tags) {
          var tags = resources.tags

          var taglist = resources.tags.map((tag, i) => {
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

        if (resources.cc) {
          var cc = CC()
        }

       
        return (
          <React.Fragment>

              <div>

                <div className="resource-list-container" key={resources.id} >
                  <div className="resource-post-header cursor-pointer" onClick={() => detailsModalShow(resources)}>
                      <p className="text-center font-semibold">{resources.title}</p>
                      <p className="text-center italic text-base">Author(s): {resources.author}</p>
                  </div>
                  <div className="resource-post-resourcetypes">
                    <ul class="icons">
                    {resources.resourcetypes.map((goal, i) =>
                      <li className="icons" key={i}><ResourceIcon iconName={goal} size={10}/></li>
                    
                    )}
                    </ul>

                  </div>

                  <div className="resource-post-tags">
                    <ul className="tags">
                      {taglist}
                    </ul>
                    
                  </div>

                  <div className="resource-list-cite">

                  <input type="checkbox" id="cite" name="citation" value="Cite" /> Cite
                  </div>


                  <div className="resource-cc">
                    {cc}
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
            <div className="row mx-auto">{resources}</div>
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


export default ResourceLists;
