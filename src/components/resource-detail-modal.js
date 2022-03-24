import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.title;
      var description = this.props.data.description;
      var image = this.props.data.image;
      var readby = this.props.data.readby;
      var alt_resource = this.props.data.alt_resource;
      var apa_reference = this.props.data.apa_reference;

      if (this.props.data.iframe) {
        var hasIframe = true
        var iframeSrc = this.props.data.iframe
        console.log(iframeSrc)
      } else {
        var hasIframe = false
      }



      if (this.props.data.readby) {
        var hasreadby = true
      } else {
        var hasreadby = false
      }

      if (this.props.data.alt_resource) {
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
      adaptiveHeight: true,
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
                      <div>
                        {hasreadby &&  
                         <p>Review by: {readby} </p>}
                      </div>
                      
                      <h2>Description</h2>
                      <div dangerouslySetInnerHTML={{ __html: description }} />
                    </span>
                  </div>

                  
                  {hasIframe &&
                  <div className="py-8">
                    
                    <div className="pdf-container">
                    <iframe src={iframeSrc} height="500px" width="100%">
                  </iframe>

                    </div>

                  <p className="py-2 text-center">You can also view the embedded content <a href={iframeSrc}  target="_blank" alt="Open the document below in a new tab.">here</a></p>
                    
                  </div>}

                  <Slider {...settings}>
                    <div className="modal-slide"> 
                      {hasAlt &&
                      <div>
                      <h2>Related Resources</h2>
                      <blockquote><ul class='arrow-list-style'>
                      <div dangerouslySetInnerHTML={{ __html: alt_resource }} />
                      </ul></blockquote></div>}

                      <div>
                        <h2>Reference</h2>
                        <div dangerouslySetInnerHTML={{ __html: apa_reference }} />
                      </div>

                    </div>
                    <div className="modal-slide">

                      <div className="object-fill">

                      Take Notes:
                      <StaticImage 
                        src="../images/create-notes.png"
                        placeholder="blurred"
                        height="200px"
                      />

                      </div>
                      
                    </div>
                  </Slider>
                  <div>

                  </div>
                  
                 
                  

                  
  
        </div>
        </Modal.Body>
  
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
