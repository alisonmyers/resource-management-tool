import React from "react"
import GoalData from "../data/MyGoals.json"

import { GiGraduateCap } from "@react-icons/all-files/gi/GiGraduateCap";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaPencilAlt } from "@react-icons/all-files/fa/FaPencilAlt";

const icons = {
  a: GiGraduateCap,
  b: FaBeer,
  c: FaPencilAlt,
}

const PostIcon = ({iconName}) => {
  const Icon = icons[iconName];
  return <Icon />
}

const GoalsHtml = () => (
    GoalData.goals.map((data, i) => {
        return (
            <div key={i}>
                <h2 className="blog-post">#{data.goal_num} {data.goal_title}</h2>
                <p className="blog-post">{data.goal_description}</p>
                <ul class="icons"> 
                    {data.goal_artifacts.map((x, i) => <li><PostIcon iconName={x}/></li>)}
                </ul>
            </div>
        )
    }
    )
)

export default GoalsHtml