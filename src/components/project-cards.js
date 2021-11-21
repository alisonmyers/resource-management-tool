import React, {useState} from "react";
import ProjectData from '../data/MyProjects.json';
import {Button} from "react-bootstrap";
import { render } from "react-dom";

const ProjectCards = () => (
    ProjectData.projects.map((data, i) => {
        return(
            <div className="col-md-12">
                <Button>{data.title}</Button>
            </div>
            
        )
    })
)
export default ProjectCards