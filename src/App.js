import "bulma/css/bulma.css";
import React from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                image={AlexaImage}
                title="Alexa"
                handle="@alexa99"
                description="Alexa is made by Amazon"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                image={CortanaImage}
                title="Cortana"
                handle="@Cortana32"
                description="Cortana was made by Microsoft"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                image={SiriImage}
                title="Siri"
                handle="@siri01"
                description="Siri was made by Apple"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
