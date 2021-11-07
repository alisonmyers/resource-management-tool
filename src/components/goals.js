import React from "react"
import GoalData from "../data/MyGoals.json"

import { FaMicroscope } from "@react-icons/all-files/fa/FaMicroscope";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { ImBubbles2 } from "@react-icons/all-files/im/ImBubbles2";

const goals = {
    1: ImBubbles2,
    2: FaMicroscope,
    3: AiFillCheckCircle,
}

const GoalIcon = ({iconName}) => {
    const Icon = goals[iconName];
    return <Icon />
  }

const GoalsHtml = () => (
    GoalData.goals.map((data, i) => {
        return (
            <div key={i}>
                <div style={{display: "flex", justifyContent: "left"}}>
                <h2>
                    <GoalIcon iconName={data.goal_num} size={20}/> <span> Goal  {data.goal_num} </span>
                </h2>
                </div>
                
                
                <p>{data.goal_description}</p>
                
                <div style={{display: "flex", justifyContent: "left"}}>
                    <span> Artifacts</span> 
                    <ul class="icons"> 
                    {data.goal_artifacts.map((x, i) => <li>{x}</li>)}
                </ul>
                    </div>
                
            </div>
        )
    }
    )
)

export default GoalsHtml