import React from "react";
import "./style.css";

function About() {
  return (
    // <!-- ABOUT ME  -->
    <div className="row">
      <div className="col-md-2"></div>
      <aside className="col-md-8">
        <div className="article-container">
          <article className="about-me-content">
            <figure className="about-me-text">
              <img
                src="../images/photo.jpg"
                className="figure-img img-fluid rounded"
                id="about-me-image"
                alt="photo of melanie bostwick"
              />
              <div className="about-me-para">
                <h2>Hello! My name is Melanie, nice to meet you!</h2>
                <p>
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
                <a href="https://www.linkedin.com/in/melaniesamazing/">LinkedIn</a>
            <a href="https://github.com/mbostwick1">GitHub</a>
              </div>
            </figure>
          </article>
          <div className="col-md-2"></div>
        </div>
      </aside>
    </div> 
    );
}

export default About;
