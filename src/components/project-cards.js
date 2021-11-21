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
                        dialogClassName="my-modal"
                        >
                        <Modal.Header closeButton>
                            <Modal.Title>{data.title}</Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <AwesomeSlider>
                                <div>
                                    <h1>Description</h1>
                                    <p class="text-white">{data.description}</p>
                                </div>
                                <div>
                                    <h1>Connections</h1>
                                    <p class="text-white">{data.connections}</p>
                                </div>
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