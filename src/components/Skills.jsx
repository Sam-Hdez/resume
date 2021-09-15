import React from "react";

const Skills = props => (
    <div className="Skills">
        <div className="Skills-container">
            {props.data.map((skill, index) => (
                <div className="Skills-item" key={`Cert-${index}`}>
                    <h5> {skill.name} </h5>
                    <p> {skill.years} </p>
                    <div className="Skills-line">
                        <span> {skill.percentage} </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Skills;
