import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
      var image = this.props.data.image
    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
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
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div class="p-12 m-12 border-solid border-4">
        <GatsbyImage image={getImage(image)}/> 
        </div>
        <div className="col-md-12">
            <Slider {...settings}>
                  <div className="pdf-container">

                      <h3>Description</h3>
                      <p>{description}</p>
                  </div>

                  <div className="pdf-container">
                      <h3>Reflection</h3>
                      <p>{reflection}</p>
                  </div>

                  <div className="pdf-container">
                      <h3>Connections</h3>
                      <p>{connections}</p>
                  </div>
             
            </Slider>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
