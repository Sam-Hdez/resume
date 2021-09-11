//Solo muestra algo en pantalla
//Para React se inicializan los nombres de los componentes en mayúsculas
import React from "react";

const About = () => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src="" alt="About-avatar" />
                </figure>
            </div>
            <div className="About-name">
                <h2>Name</h2>
            </div>
            <div className="About-profession">
                <p>Proefssion</p>
            </div>
            <div className="About-desc">
                <p>About me: Description</p>
            </div>
            <div className="About-location">
                <p>Location</p>
            </div>
            <div className="About-social">
                Social
            </div>
        </div>
    </div>
);

export default About;
