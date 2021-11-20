import React from "react"
import GoalData from "../data/MyGoals.json"


import { FaMicroscope } from "@react-icons/all-files/fa/FaMicroscope";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { ImBubbles2 } from "@react-icons/all-files/im/ImBubbles2";
import { BiCool } from "@react-icons/all-files/bi/BiCool";

const goals = {
    1: ImBubbles2,
    2: FaMicroscope,
    3: AiFillCheckCircle,
    4: BiCool,
}

const GoalIcon = ({iconName}) => {
    const Icon = goals[iconName];
    return <Icon />
  }

const GoalsHtml = () => (
    GoalData.goals.map((data, i) => {
        return (
            <div key={i} class="goal-card">
                <div style={{display: "flex", justifyContent: "left"}}>
                <h2>
                    <GoalIcon iconName={data.goal_num} size={20}/> <span> Goal  {data.goal_num} </span>
                </h2>
                </div>
                
                
                <p>{data.goal_description}</p>
                
                <div style={{display: "flex", justifyContent: "left"}}>
                    <span>Artifacts</span> 
                    <ul class="icons"> 
                    {data.goal_artifacts.map((x, i) => 
                    <li>
                        <button class="rounded-full h-16 w-16 flex items-center justify-center bg-transparent hover:bg-darkgrey-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-grey-00 hover:border-transparent">
                            {x}
                        </button>
                    </li>)}
                </ul>
                    </div>
                
            </div>
        )
    }
    )
)

export default GoalsHtml