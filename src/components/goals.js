import React from "react"
import GoalData from "../data/mygoals.json"


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
            <div key={i} className="goal-card-container">

                <div className="goal-card-title">
                    <h2>Goal  {data.goal_num}: {data.goal_title} </h2>
                </div>

                <div className="goal-card-icon">
                    <GoalIcon iconName={data.goal_num}/>
                </div>
                
                <div className="goal-card-content">
                    <p>{data.goal_description}</p>
                </div>
 
                <div className= "goal-card-artifacts" style={{display: "flex", justifyContent: "left"}}>
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