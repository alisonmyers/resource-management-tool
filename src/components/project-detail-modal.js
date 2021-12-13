import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import { FiExternalLink } from  "@react-icons/all-files/fi/FiExternalLink";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.title;
      var description = this.props.data.description;
      var connections = this.props.data.connections;
      var reflection = this.props.data.reflection;
      var image = this.props.data.image;
      var group = this.props.data.group;
      var alternate_links = this.props.data.goals_text;

      if (this.props.data.iframe) {
        var hasIframe = true
        var iframeSrc = this.props.data.iframe
        console.log(iframeSrc)
      } else {
        var hasIframe = false
      }



      if (this.props.data.group) {
        var hasGroup = true
      } else {
        var hasGroup = false
      }

      if (this.props.data.goals_text) {
        var hasAlt = true
      } else {
        var hasAlt = false
      }

     
    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      scrollable: true
    };

    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="my-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title><h1>{title}</h1></Modal.Title>
        
        </Modal.Header>
        
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <Modal.Body style={{
            maxHeight: 'calc(100vh - 210px)',
            overflowY: 'auto'
          }}
          >
   
          <div className="modal-box">
       
                  <div>
                  <span> 
                    <div className="small-container" style={{float: "right"}}>
                        <GatsbyImage image={getImage(image)}/> 
                        </div>
                    </span>
                    <span>
                      <div>
                        {hasGroup &&  
                         <p>Group Members: {group} </p>}
                      </div>
                      
                      <h2>Description</h2>
                      <div dangerouslySetInnerHTML={{ __html: description }} />

                      <h2>Connections</h2>
                      <div dangerouslySetInnerHTML={{ __html: connections }} />

                      <h2>Reflection</h2>
                      <div dangerouslySetInnerHTML={{ __html: reflection }} />
                    </span>
                  </div>

                  
                  {hasIframe &&
                  <div>
                    <p>You can also view the embedded content <a href={iframeSrc}  target="_blank" alt="Open the document below in a new tab.">here</a></p>
                    <div className="pdf-container">
                    <iframe src={iframeSrc} height="500px" width="100%">
                  </iframe>
                    </div>
                  </div>}
                  
                  {hasAlt &&
                  <div>
                  <h2>More Resources</h2>
                  <blockquote><ul class='my-style'>
                  <div dangerouslySetInnerHTML={{ __html: alternate_links }} />
                  </ul></blockquote></div>}

                  

                  
  
        </div>
        </Modal.Body>
  
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
