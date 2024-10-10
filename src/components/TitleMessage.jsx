import React from "react";
import Typewriter from "typewriter-effect";

const TitleMessage = () => (
    <h2>
      <div>
        <div style={{fontFamily:'cursive',color:'var(--clr-title)', marginBottom:'20px'}}>
          <div>
            Hi, I am
            <br />
            <span>
              <strong>Sunil Kumar Verma</strong>
            </span>
          </div>
          <div>
            <Typewriter
              options={{
                strings: ["Web Developer","Mern Developer", "Tech Enthusiast"],
                autoStart: true,
                loop: true,
                delay: 100
              }}
            />
          </div>
        </div>
      </div>
    </h2>
  );
  
  export default TitleMessage;
  