import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";

class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.title;
      var description = this.props.data.description;
     
    }
    return (
      <Modal
        {...this.props}
        size="lg"
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
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <AwesomeSlider>
                    <div className="col-md-10 mx-auto">
                    <h3 style={{ padding: "5px 5px 0 5px" }}>
                      {title}
                    </h3>
                    <p>{description}</p>
                  </div>
             
            </AwesomeSlider>
          </div>

        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
