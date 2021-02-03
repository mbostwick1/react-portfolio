import React from "react";
import Card from "../components/Card/index";
import Info from "../components/projects.json";

function Portfolio() {
  return (
    <div>
      <section class="section">
        <div class="container has-text-centered">
          <h1 id="portfolioHeadline">Check out some projects!</h1>
          <div class="columns is-centered is-multiline">
            {Info.map((data) => {
              return (
                <Card
                  key={data.id}
                  src={data.src}
                  alt={data.alt}
                  headline={data.headline}
                  demo={data.demo}
                  github={data.github}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
