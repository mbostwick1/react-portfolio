import React from "react";
import "./style.css";

function About() {
  return (
    // <!-- ABOUT ME  -->
    <section className="section">
    <div className="container has-text-centered">
    <div className="columns is-centered is-multiline">
    <div className='column is-8' id="column">
                  <h1>Hello, nice to meet you!</h1>
              <img
                src="../images/photo.jpg"
                className="figure-img img-fluid rounded"
                id="about-me-image"
                alt="photo of melanie bostwick"
              />
                <p id="about-me">
                  I am a Senior Designer and Developer. I started off
                  my design education in Atlanta while attending Georgia State
                  University. After graduation I made a big leap and moved to
                  Chicago to join an incredible creative team at Centro. This is
                  where my career truly began. After almost 5 years, I moved
                  back to Atlanta to join an amazing Studio team at 22 Squared.
                  It's been a little over 3 years and I finally took the step to
                  further my education in Full-Stack development at Georgia
                  Tech. I am very enthusiastic about this new journey of merging
                  my design and development skills.
                </p>
                <div className="buttons are-medium is-centered">
                <a className="button" id="linkedin" href="https://www.linkedin.com/in/melaniesamazing/" target="_blank" >LinkedIn</a>
                <a className="button" id="github" href="https://github.com/mbostwick1" target="_blank">GitHub</a>
                </div>
            </div>
            </div>
          </div> 
        </section>
    );
}

export default About;
