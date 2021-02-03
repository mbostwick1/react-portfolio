import React from "react";
import "./style.css";

function Card(props) {
  return (
        <div class='column is-4' id="column">
          <div class="card" id="card">
            <div class="card-image">
              <figure class="image is-1by1">
                <img src={props.src} alt={props.alt} />
              </figure>
            </div>

            <div class="card-content">
              <p class="title is-4" id="headline">{props.headline}</p>
            </div>
            <footer class="card-footer">
              <a href={props.demo} target="_blank" class="card-footer-item" id="portBtn">
                Demo
              </a>
              <a href={props.github} target="_blank" class="card-footer-item" id="portBtn">
                GitHub
              </a>
            </footer>
          </div>
        </div>
  );
}

export default Card;
