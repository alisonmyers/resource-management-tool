import React, {useState} from "react";
import ProjectData from '../data/MyProjects.json';
import {Modal, Button} from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";

const ProjectCards = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        ProjectData.projects.map((data, i) => {
            return(
                <div className="col-md-12">
                    <Button onClick={handleShow}>{data.title}</Button>

                    <Modal show={show} onHide={handleClose} id={i}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcentre"
                        centered
                        className="modal-inside"
                        >
                        <Modal.Header closeButton>
                            <Modal.Title>{data.title}</Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <AwesomeSlider>
                                <div>{data.description}</div>
                                <div>{data.connections}</div>
                            </AwesomeSlider>
                        </Modal.Body>
                        <Modal.Footer>
                            <p>Here is the footer</p>
                        </Modal.Footer>
                    </Modal>
                </div>
                
            )
    }))
}
export default ProjectCards